const web3 = require('../library/web3')
const {
    andy,
    ben
} = require('../library/account')

console.log('web3.version : ', web3.version)
console.log('web3.currentProvider : ', web3.currentProvider)

web3.eth.getBalance('0x00a329c0648769A73afAc7F9381E08FB43dBEA72').then(console.log)