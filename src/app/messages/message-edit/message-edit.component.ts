import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  originalMessage: Message;
  message: Message;
  editMode: boolean = false;
  id: string;

  constructor(private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        if(!id) {
          this.editMode = false;
          return;
        }

        this.originalMessage = this.messageService.getMessage(id);
        this.editMode = true;
        this.message = JSON.parse(JSON.stringify(this.originalMessage));
      });
  } 
 
  onSubmit(form: NgForm) {
    const value = form.value;

    const newMessage = new Message(
      "",
      value.subject,
      value.msgText,
      "1",
    );

    this.messageService.addMessage(newMessage);

    this.router.navigate(['/messages']);
  }

}
