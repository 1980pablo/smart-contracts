const assert = require('assert');
const ganache = require('ganache-cli');
const { isTypedArray } = require('util/types');
const Web3 = require('web3');
const web3 = new Web3(ganache.provier());
const compile = require('../compile');
const abi = compile.abi;
const bytecode = compile.evm.bytecode.object;

let accounts;
let contractInstance;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    contractInstance = await new web3.eth.Contract(abi)
    .deploy({
        data: bytecode,
        arguments: ['Alberto']
    })
    .send({ from: accounts[0], gas: '1000000'})
});

describe('StorageName', () => {
    it('deploys a contract', () => {
        console.log(contractInstance._adress);
        console.log(accounts);
        });
    it('Origin name', async () => {
            const name = await contractInstance.methods.getName().call();
            assert.strictEqual('Alberto', name);
         });
    it('Can chage name', async () =>{
        await contractInstance.Instance.methods.setName('Maria').send({ from})
    })     

    });
