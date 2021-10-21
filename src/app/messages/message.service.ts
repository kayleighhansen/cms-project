import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model'
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root' 
})
export class MessageService {
  messages: Message[] = [];
  messagesAdded = new EventEmitter<Message[]>();

  constructor() { 
    this.messages = MOCKMESSAGES;
  }

  addMessage(message : Message) {
    console.log(message);
    this.messages.push(message);
    this.messagesAdded.emit(this.messages.slice());
  }

  getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id)
  } 

  getMessages(): Message[] {
    return this.messages.slice();
  }

}
