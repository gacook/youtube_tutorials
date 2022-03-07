const Web3 = require('web3')
require('dotenv').config()

const { chains } = require('./chains')
const { wallets } = require('./wallets')
const { tokens } = require('./tokens')

const chain = chains.avalanche
const web3 = new Web3(chain.rpc_url)
const aave_lending_address_provider_addr = chain.contracts.avax_lpool.address
const aave_lending_address_provider_abi = chain.contracts.avax_lpool.abi
const aave_lending_address_provider_sc = new web3.eth.Contract(aave_lending_address_provider_abi, aave_lending_address_provider_addr)

const erc20abi = tokens.erc20.abi
const web3wallet = web3.eth.accounts.wallet.add(wallets.avalanche.primary.private_key)

async function main(){
    //await deposit('0xd00ae08403B9bbb9124bB305C09058E32C39A48c', web3.utils.toWei('0.005'), web3wallet.address)
}

async function approve(token, addr){
    console.log('approving token for use by the lending pool address')
    tokenSC = new web3.eth.Contract(erc20abi, token)
    gas = await tokenSC.methods.approve(addr, web3.utils.toWei('5000')).estimateGas({
        'from': web3wallet.address,
    })
    tx = await tokenSC.methods.approve(addr, web3.utils.toWei('5000')).send({
        'from': web3wallet.address,
        'gas': gas
    })
    if(tx.status) console.log('approved')
}

async function deposit(token, amount, onBehalfOf){
    try{
        lending_pool_addr = await aave_lending_address_provider_sc.methods.getLendingPool().call()
        lending_pool_abi = [{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"}]

        lending_pool_sc = new web3.eth.Contract(lending_pool_abi, lending_pool_addr)

        if(token!=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee) {
            allowance = await checkAllowance(token, onBehalfOf, lending_pool_addr)
            if(allowance<amount) await approve(token, lending_pool_addr)
        }

        gas = await lending_pool_sc.methods.deposit(token, amount, onBehalfOf, 0).estimateGas(
            {
                'from':web3wallet.address
            }
        )
        console.log(`gas required ${gas}`)

        tx = await lending_pool_sc.methods.deposit(token, amount, onBehalfOf, 0).send(
            {
                'from':web3wallet.address,
                'gas': 500000
            }
        )
        if(tx.status){
            console.log(`Deposit successful ${tx.transactionHash}`)
        }
        return tx.status
    }catch(e){
        console.error(`Aave deposit failed due to: ${e}`)
    }
    return false
    
}

async function checkAllowance(token, owner, spender){
    allowance = 0
    tokenSC = new web3.eth.Contract(erc20abi, token)
    allowance = await tokenSC.methods.allowance(owner, spender).call()
    return allowance
}

module.exports = {
    deposit
}
