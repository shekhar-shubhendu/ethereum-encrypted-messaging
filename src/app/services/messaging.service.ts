import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Message } from '../models/message';
const Web3 = require('web3');
const contract = require('truffle-contract');
const messageArtifact = require('../../../build/contracts/MessageRegistry.json');
const messageContract = contract(messageArtifact);

@Injectable()
export class MessagingService {

  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  messageRegistry: any;
  contractAddress: any;
  constructor(private authService: AuthenticationService) {
    messageContract.deployed().then(instance => {
      const userDetails = this.authService.getWalletDetails();
      this.contractAddress = instance.address;
      this.messageRegistry = new this.web3.eth.Contract(messageArtifact.abi, instance.address, {
        from: userDetails['address']
      });
    });
   }

  sendMessage = (message: Message) => {
    const privateKey = '0x' + this.authService.getWalletDetails().privateKey;
    const encoded = this.messageRegistry.methods.createMessage(message.encryptedMessage, message.receiver).encodeABI();
    const tx = {
      to: this.contractAddress,
      gas: this.web3.utils.toHex(this.web3.utils.toWei('0.0012', 'gwei')),
      gasPrice: this.web3.utils.toHex(this.web3.utils.toWei('23000', 'wei')),
      value: this.web3.utils.toHex(this.web3.utils.toWei('0.012', 'ether')),
      data: encoded
    };
    this.web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
      this.web3.eth.sendSignedTransaction(signed.rawTransaction);
    });
  }
}
