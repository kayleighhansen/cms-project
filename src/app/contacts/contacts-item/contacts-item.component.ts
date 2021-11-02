import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
 
@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css'],
})

export class ContactsItemComponent implements OnInit {
  @Input() contact: Contact;
  //@Input() index: number;

  constructor(private contactService: ContactService) { }
 
  ngOnInit() {
  } 

  onSelected() {
    this.contactService.contactSelectedEvent.emit(this.contact);
  }  
  
}
