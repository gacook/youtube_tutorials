const Web3 = require('web3')
require('dotenv').config()

const { chains } = require('./chains')
const { wallets } = require('./wallets')
const { tokens } = require('./tokens')

const chain = chains.avalanche
const wallet = wallets.avalanche.primary
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
    compounded = await compoundRewards(tokens.avalanche.wavax.address)
    console.log(`Compounded: ${compounded}`)
    console.log('-----------------------')
    console.log()
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
        } else console.log(`Not enough rewards ${web3.utils.fromWei(tokenRewards[wavaxIndex])} to claim for ${rewardTokens[wavaxIndex]}`)
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
        bTokenBalance = web3.utils.toBN(tokenBalance)
        bThreshold = web3.utils.toBN(web3.utils.toWei('0.2'))
        if(bTokenBalance.gte(bThreshold)){
            console.log(`Let's compound token Rewards ${web3.utils.fromWei(tokenBalance)}`)
            success = await aave.deposit(tokenAddress, web3.utils.toWei('0.1'), onBehalfOf)
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

async function getTokenBalance(tokenAddress){
    balance = 0
    try{
        tokenSC = new web3.eth.Contract(tokens.avalanche.wavax.abi, tokens.avalanche.wavax.address)
        balance = await tokenSC.methods.balanceOf(onBehalfOf).call()
    }catch(e){
        console.error(`getTokenBalance: Error ${e}`)
    }
    return balance
}
main()
