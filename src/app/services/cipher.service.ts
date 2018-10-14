import { Injectable } from '@angular/core';

import {
  secretbox,
  randomBytes,
  box
} from 'tweetnacl';
import {
  encodeBase64,
  encodeUTF8,
  decodeUTF8,
  decodeBase64
} from 'tweetnacl-util';

@Injectable()
export class CipherService {

  constructor() { }

  newNonce() {
    return randomBytes(secretbox.nonceLength);
  }

  encrypt(message, sharedKey) {
    const nonce = this.newNonce();
    const cipherText = box.after(decodeUTF8(message), nonce, sharedKey);
    return {
      nonce: encodeBase64(nonce),
      cipherText: encodeBase64(cipherText)
    };
  }

  decrypt(cipherText, nonce, sharedKey) {
    return encodeUTF8(box.open.after(decodeBase64(cipherText), decodeBase64(nonce), sharedKey));
  }

  generateEncryptionKeys() {
    const keyPair = box.keyPair();
    return {
      publicKey: encodeBase64(keyPair.publicKey),
      secretKey: encodeBase64(keyPair.secretKey)
    };
  }

  getEncryptionKeys({ publicKey, secretKey }) {
    return {
      publicKey: decodeBase64(publicKey),
      secretKey: decodeBase64(secretKey)
    };
  }

  generateSharedKey(secretKey, publicKey) {
    return box.before(decodeBase64(publicKey), decodeBase64(secretKey));
  }
}
