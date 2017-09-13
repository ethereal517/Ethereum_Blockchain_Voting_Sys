Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts);

fs = require('fs');
code = fs.readFileSync('Voting.sol').toString();
solc = require('solc');
compileCode = solc.compile(code);
console.log(compileCode);

abiDefinition = JSON.parse(compileCode.contracts[':Voting'].interface);
VotingContract = web3.eth.contract(abiDefinition);
byteCode = compileCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rama', 'Nick', 'Jose'], {data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
contractInstance = VotingContract.at(deployedContract.address);

contractInstance.totalVotesFor.call('Rama');
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
console.log(contractInstance.totalVotesFor.call('Rama').toLocaleString())