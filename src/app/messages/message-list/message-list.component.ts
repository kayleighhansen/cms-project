import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  id = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messagesAdded.subscribe(
      (messages: Message[]) =>{
        this.messages = messages;
      }
    );

    this.messages = this.messageService.getMessages();
  } 
 
  // onMessageAdded(message: Message){
  //   this.messages.push(message);
  // }

}
