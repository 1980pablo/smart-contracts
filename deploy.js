const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const compile = require('./compile');
const abi = compile.abi;
const bytecode = compile.evm.bytecode.object;

const provider = new HDWalletProvider(
    'boring history uphold fringe smoke icon income nephew duty glove harsh reopen',
    'https://ropsten.infura.io/v3/77236e5edca946e8a822f5b873897c5f'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    contractInstance = await new web3.eth.Contract(abi)
    .deploy({
        data: bytecode,
        arguments: ['Alberto']
    })
    .send({ from: accounts[0], gas: '1000000'})

    console.log(accounts[0]);
    console.log(result);
}
deploy();
