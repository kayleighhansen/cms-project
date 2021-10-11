import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('textInput') textInputRef: ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  } 

  onSendMessage() {
 
    const subject = this.subjectInputRef.nativeElement.value;
    const text = this.textInputRef.nativeElement.value;
    const id = 0;
    const sender = "Me";
    const newMessage = new Message(id, subject, text, sender);
    console.log(newMessage);
    this.messageAdded.emit(newMessage);

  }

  onClear() {
    this.subjectInputRef.nativeElement.value = "";
    this.textInputRef.nativeElement.value = "";
  }
}
