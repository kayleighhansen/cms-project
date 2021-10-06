import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedContact: Contact;
  
  constructor() {}

  ngOnInit() {}
}
