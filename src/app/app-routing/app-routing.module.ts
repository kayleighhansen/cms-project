import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { DocumentsComponent } from '../documents/documents.component';
import { MessageListComponent } from '../messages/message-list/message-list.component';
import { DocumentEditComponent } from '../documents/document-edit/document-edit.component';
import { DocumentDetailComponent } from '../documents/document-detail/document-detail.component';


const appRoutes: Routes =[
  { path: '', redirectTo: '/documents', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'messages', component: MessageListComponent }, 
  { path: 'documents', component: DocumentsComponent, children: [
    { path: 'new', component: DocumentEditComponent},
    { path: ':id', component: DocumentDetailComponent},
    { path: ':id/edit', component: DocumentEditComponent}
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
