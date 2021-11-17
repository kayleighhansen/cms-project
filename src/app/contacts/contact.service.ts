import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject, Subscription } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];
  maxContactId:number;
 
  contactSelectedEvent = new EventEmitter<Contact>();
  contactListChanged = new Subject<Contact[]>();


  constructor(private http: HttpClient) { 
    //this.contacts = MOCKCONTACTS;
    //this.maxContactId = this.getMaxId();
  }

  getContacts() {
    this.http.get('https://cms-project-3527d-default-rtdb.firebaseio.com/contacts.json').subscribe((result: any) => {
      this.contacts = result;
      this.maxContactId = this.getMaxId();

      this.contacts.sort((a , b) => 
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.contactListChanged.next(this.contacts.slice());
      },
    );
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

    this.storeContact();
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

    this.storeContact();
  }

  storeContact() {
    let contacts = JSON.stringify(this.contacts);

    let contactHeader = new HttpHeaders({"Content-Type" : "application/json" });

    this.http.put('https://cms-project-3527d-default-rtdb.firebaseio.com/contacts.json', contacts, {headers: contactHeader})
      .subscribe(
        () => {
          this.contactListChanged.next(this.contacts.slice())
        }
      );
  }
}
