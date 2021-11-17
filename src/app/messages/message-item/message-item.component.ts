import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})

export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  messageSender: string;

  constructor(private messageService: MessageService) {}
 
  ngOnInit(): void {  }
}
