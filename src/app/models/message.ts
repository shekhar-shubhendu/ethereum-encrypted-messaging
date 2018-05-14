import { MessageType } from '../enums/message-type.enum';

export interface Message {
  sender: string;
  receiver: string;
  encryptedMessage?: string;
  actualMessage?: string;
  messageType: MessageType;
}
