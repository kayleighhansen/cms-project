import { Injectable, EventEmitter } from '@angular/core';
import { Document } from '../documents/document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root' 
})
export class DocumentService {

  private documents: Document[] = [];

  documentSelectedEvent = new EventEmitter<Document>();

  getDocuments() {
    return this.documents
    .sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    .slice();
  }

  getDocument(id: string): Document {
    return this.documents.find((document) => document.id === id)
  }

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }
}
