import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model'
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MessageService {

  messageSelectedEvent = new EventEmitter<Document>();
  messageListChanged = new Subject<Message[]>();
  fetchMessagesEvent = new Subject<Message[]>();

  private messages: Message[] = [];
  maxMessageId: number;

  constructor(private http: HttpClient) { }

  addMessage(newMessage : Message) {
      if (newMessage == null) {
        return;
      }
  
      this.maxMessageId++;
      newMessage.id = this.maxMessageId.toString();
  
      this.messages.push(newMessage);
      const messagesListClone = this.messages.slice();
      this.messageListChanged.next(messagesListClone);
  
      this.storeMessages();
    }

  getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id)
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

  getMessages() {
    this.http.get('https://cms-project-3527d-default-rtdb.firebaseio.com/messages.json').subscribe((result: any) => {
      this.messages = result;
      this.maxMessageId = this.getMaxId();

      this.messages.sort((a , b) => 
        a.sender > b.sender ? 1 : b.sender > a.sender ? -1 : 0);
        this.messageListChanged.next(this.messages.slice());
      },
    );
  }

  storeMessages() {
    let messages = JSON.stringify(this.messages);

    console.log(messages);

    let messageHeader = new HttpHeaders({"Content-Type" : "application/json" });

    this.http.put('https://cms-project-3527d-default-rtdb.firebaseio.com/messages.json', messages, {headers: messageHeader})
      .subscribe(
        () => {
          this.messageListChanged.next(this.messages.slice())
        }
      );
  }

}
