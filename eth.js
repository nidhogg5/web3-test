const web3 = require('./library/web3')
const {
    andy,
    ben
} = require('./library/account')

web3.eth.getAccounts().then(console.log);
web3.eth.isMining().then(console.log);
web3.eth.getHashrate().then(console.log);
web3.eth.getGasPrice().then(console.log);
web3.eth.getBlockNumber().then(console.log);
web3.eth.getBalance(andy).then(console.log);
web3.eth.getBalance(ben).then(console.log);