import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  constructor() { }

  messages: Message[] = [
    new Message(1, 'R.Kent Jackson', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message(2, 'Rex Barzee', 'When is assignment 3 due', 'Steve Johnson'),
    new Message(3, 'Rex Barzee', 'Assignment 3 is due on Saturday at 11:30 PM', 'Bro. Jackson'),
    new Message(4, 'Rex Barzee', 'Can I meet with you sometime. I need help with assignment 3', 'Mark Smith'),
    new Message(5, 'Rex Barzee', 'I can meet with you today at 4:00 PM in my office', 'Bro Jackson'),
  ];

  ngOnInit(): void {
  } 

  onMessageAdded(message: Message){
    this.messages.push(message);

  }

}
