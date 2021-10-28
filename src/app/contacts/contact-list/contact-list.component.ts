import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  private contactChangeSub: Subscription;

  constructor(private contactService: ContactService) { 
    //this.contacts = this.contactService.getContacts();
  }
   
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactChangeSub = this.contactService.contactChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
    
  } 

  onContactSelected(contact: Contact) { 
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
