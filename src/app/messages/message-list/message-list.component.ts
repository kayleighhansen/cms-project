import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  private messageChangeSub: Subscription;
  messages: Message[] = [];
  id = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessages();
    this.messageChangeSub = this.messageService.messageListChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  } 

  ngOnDestroy(): void {
    this.messageChangeSub.unsubscribe();
  }
}
