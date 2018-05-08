import { Injectable } from '@angular/core';
const Web3 = require('web3');
const contract = require('truffle-contract');
const messageArtifact = require('../../../build/contracts/MessageRegistry.json');

@Injectable()
export class MessagingService {

  constructor() { }

}
