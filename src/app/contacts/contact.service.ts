import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];
  maxContactId:number;
 
  contactSelectedEvent = new EventEmitter<Contact>();
  contactListChanged = new Subject<Contact[]>();


  constructor() { 
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts() {
    return this.contacts
    .sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    .slice();
  }
 
  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id)
  } 
 
  deleteContact(contact: Contact) {
    if (!contact) {
       return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
       return;
    }
    this.contacts.splice(pos, 1);
    this.contactListChanged.next(this.contacts.slice());
  }

  getMaxId(): number {
    var maxId = 0

    this.contacts.forEach(contact => {
      var currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }); 

    return maxId
  }

  addContact(newContact: Contact) {
    if (newContact == null) {
      return;
    }

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();

    this.contacts.push(newContact);
    const contactsListClone = this.contacts.slice();
    this.contactListChanged.next(contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {

    if(originalContact == null || newContact == null){
      return;
    }
    
    const pos = this.contacts.indexOf(originalContact);

    if(pos < 0) {
      return;
    }
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    const contactsListClone = this.contacts.slice();
    this.contactListChanged.next(contactsListClone);
  }
}
