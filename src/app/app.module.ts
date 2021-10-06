import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header.component';
import { ContactsItemComponent } from './contacts/contacts-item/contacts-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    ContactsItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
