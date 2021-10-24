import { Injectable, EventEmitter } from '@angular/core';
import { Document } from '../documents/document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root' 
})
export class DocumentService {
  private documents: Document[] = [];

  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter();

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments() {
    return this.documents
    .sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    .slice();
  }

  getDocument(index: number){
    return this.documents.slice()[index];
  }

  deleteDocument(document: Document) {
    if (!document) {
       return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
       return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
 }
}
