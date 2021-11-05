import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';

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
    DocumentDetailComponent,
    MessageEditComponent,
    MessageListComponent,
    MessageItemComponent,
    DropdownDirective,
    DocumentEditComponent,
    ContactEditComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
