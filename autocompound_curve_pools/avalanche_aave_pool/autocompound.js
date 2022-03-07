const Web3 = require('web3')
require('dotenv').config()

const { chains } = require('./chains')
const { wallets } = require('./wallets')
const { tokens } = require('./tokens')

const chain = chains.avalanche
const wallet = wallets.avalanche.test_account_1
const web3 = new Web3(chain.rpc_url)

const aave = require('./aave.js')
const aave_pool_addr = chain.contracts.aave.address
const aave_pool_abi = chain.contracts.aave.abi
const aave_pool_smart_contract = new web3.eth.Contract(aave_pool_abi, aave_pool_addr)

const onBehalfOf = wallet.address
const web3wallet = web3.eth.accounts.wallet.add(wallet.private_key)

const POLLING_INTERVAL = (60*60*4*1000)


async function main(){
    console.log(`*** Welcome to your Curve & Aave Auto Claim and Compounder ***`)
    console.log(`!Please use at your own risk and be responsible with your keys!\n\n`)
    await autoClaimAndCompound()

    setInterval(async () => { 
        await autoClaimAndCompound()
    }, POLLING_INTERVAL)
}

async function autoClaimAndCompound(){
    rewardTokens = await getRewardTokens(aave_pool_smart_contract)
    console.log(`You're getting these ${rewardTokens} tokens from Curve`)
    tokenRewards = await checkClaimableRewards(onBehalfOf, rewardTokens, aave_pool_smart_contract)
    console.log(`These rewards ${tokenRewards} are claimable`)
    console.log(`Let's see if these rewards are worth claiming`)
    claimed = await attemptRewardClaim(rewardTokens, tokenRewards)
    // compounded = await compoundRewards(rewardTokens, tokenRewards)
    // wavax = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
    compounded = await compoundRewards(tokens.avalanche.wavax)
}

async function getRewardTokens(smartContract){
    rewardTokens = []
    rewardToken = ''
    index = 0
    try{
        while(rewardToken!='0x0000000000000000000000000000000000000000'){
            rewardToken = await smartContract.methods.reward_tokens(index).call()
            if(rewardToken!='0x0000000000000000000000000000000000000000') rewardTokens.push(rewardToken)
            index = index + 1
        }
    }catch(e){
        console.error(`The following error occurred whilst checking reward Tokens: ${e}`)
    }
    
    return rewardTokens
}

async function checkClaimableRewards(addr, rewardTokens, smartContract){
    tokenRewards = []
    try{
        for(let i=0; i<rewardTokens.length; i++){
            rewards = await smartContract.methods.claimable_reward_write(addr, rewardTokens[i]).call()
            tokenRewards.push(rewards)
        }
    }catch(e){
        console.error(`The following error occurred whilst checking claimable rewards: ${e}`)
    }
    return tokenRewards
}

async function attemptRewardClaim(rewardTokens, tokenRewards){
    claimed = false
    try{
        wavaxIndex = getWavaxIndex(rewardTokens)
        if(web3.utils.toBN(tokenRewards[wavaxIndex]).gte(web3.utils.toBN(web3.utils.toWei('0.1')))){
            console.log(`There's enough rewards to claim, let's try it.`)
            claimed = await claimRewards()
        }else console.log(`Not enough rewards ${web3.utils.fromWei(tokenRewards[wavaxIndex])} to claim for ${rewardTokens[wavaxIndex]}`)
    }catch(e){
        console.error(`The following error occurred whilst attempting the reward claim: ${e}`)
    }
    return claimed

}

async function claimRewards(){
    try{
        gas = await aave_pool_smart_contract.methods.claim_rewards(onBehalfOf).estimateGas({
            'from':web3wallet.address
        })
        console.log(`gas required: ${gas}`)
        tx = await aave_pool_smart_contract.methods.claim_rewards(onBehalfOf).send({
            'from':onBehalfOf,
            'gasPrice':'25000000000',
            'gas':gas
        })
        if(tx.status) console.log(`Successful claim ${tx.transactionHash}`)
        return tx.status
    }catch(e){
        console.error(`The following error occurred whilst claiming the rewards: ${e}`)
    }
    return false
}

async function compoundRewards(tokenAddress){
    try{
        tokenBalance = await getTokenBalance(tokenAddress)
        if(web3.utils.toBN(tokenBalance).gte(web3.utils.toBN(web3.utils.toWei('0.1')))){
            console.log(`Let's compound token Rewards ${web3.utils.fromWei(tokenBalance)}`)
            success = await aave.deposit(tokenAddress, tokenBalance, onBehalfOf)
            if(success) console.log(`Rewards compounded, yay!!! :)`)
            return success
        }
    }catch(e){
        console.error(`The following error occurred whilst compounding the rewards: ${e}`)
    }
    return false
}

function getWavaxIndex(rewardTokens){
    return rewardTokens.map(token => token.toLowerCase()).indexOf('0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7')
}

function getWavaxRewards(rewardTokens, tokenRewards){
    index = getWavaxIndex(rewardTokens)
    if(index<0) console.log('Something went wrong getting rewards')
    else{
        return tokenRewards[index]
    }
    return 0
}

async function getTokenBalance(token){
    balance = 0
    try{
        erc20abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x79cc6790"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x983b2d56"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x98650275"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaa271e1a"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event","signature":"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event","signature":"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}]
        tokenSC = new web3.eth.Contract(erc20abi, token)
        balance = await tokenSC.methods.balanceOf(onBehalfOf).call()
        return balance
    }catch(e){
        console.error(`getTokenBalance: Error ${e}`)
    }
    return balance
}
main()
