import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model'
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MessageService {

  private messages: Message[] = [];
  maxMessageId:number;

  messagesAdded = new EventEmitter<Message[]>();
  messageListChanged = new Subject<Message[]>();

  constructor(private http: HttpClient) { 
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

  getMaxId(): number {
    var maxId = 0

    this.messages.forEach(message => {
      var currentId = parseInt(message.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }); 

    return maxId
  } 

  getContacts() {
    this.http.get('https://cms-project-3527d-default-rtdb.firebaseio.com/messages.json').subscribe((result: any) => {
      this.messages = result;
      this.maxMessageId = this.getMaxId();

      this.messages.sort((a , b) => 
        a.sender > b.sender ? 1 : b.sender > a.sender ? -1 : 0);
        this.messageListChanged.next(this.messages.slice());
      },
    );
  }

  storeMessage() {
    let messages = JSON.stringify(this.messages);

    let messageHeader = new HttpHeaders({"Content-Type" : "application/json" });

    this.http.put('https://cms-project-3527d-default-rtdb.firebaseio.com/contacts.json', messages, {headers: messageHeader})
      .subscribe(
        () => {
          this.messageListChanged.next(this.messages.slice())
        }
      );
  }

  addContact(newMessage: Message) {
    if (newMessage == null) {
      return;
    }

    this.maxMessageId++;
    newMessage.id = this.maxMessageId.toString();

    this.messages.push(newMessage);
    const messagesListClone = this.messages.slice();
    this.messageListChanged.next(messagesListClone);

    this.storeMessage();
  }

}
