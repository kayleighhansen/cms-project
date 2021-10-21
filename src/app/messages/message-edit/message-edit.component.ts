import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('textInput') textInputRef: ElementRef;
  currentSender = '1';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  } 

  onSendMessage() {

    const subjectValue = this.subjectInputRef.nativeElement.value;
    const msgTextValue = this.textInputRef.nativeElement.value;

    const message = new Message(
      '1',
      subjectValue,
      msgTextValue,
      this.currentSender);

    this.messageService.addMessage(message);

    this.onClear;
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = "";
    this.textInputRef.nativeElement.value = "";
  }
}
