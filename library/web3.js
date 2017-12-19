const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

//or
//web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

//change provider
//web3.setProvider('ws://localhost:8546');

//Websocket
//web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

module.exports = web3