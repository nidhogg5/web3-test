const web3 = require('./library/web3')
const {
    andy,
    ben
} = require('./library/account')

web3.eth.sendTransaction({
    from: andy,
    to: ben,
    value: 10,
}).once('transactionHash', function (hash) {
    console.log('交易送出 transaction hash : ', hash)
}).once('receipt', function (receipt) {
    console.log('交易被挖到了 receipt : ', receipt)
}).on('confirmation', function (confNumber, receipt) {
    console.log('交易穩定度 confNumber : ', confNumber)
}).on('error', function (error) {
    console.log('發生錯誤 error : ', error)
}).then(function (receipt) {
    console.log('交易完成 receipt : ', receipt)
})