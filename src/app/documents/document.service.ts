import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Document } from '../documents/document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root' 
})
 
export class DocumentService {
  private documents: Document[] = [];
  maxDocumentId:number;

  documentSelectedEvent = new EventEmitter<Document>();
  documentListChanged = new Subject<Document[]>();

  constructor() { 
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments() {
    return this.documents
    .sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    .slice();
  }
 
  getDocument(id: string){
    return this.documents.find((document) => document.id === id);
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
    this.documentListChanged.next(this.documents.slice());
 }

  getMaxId(): number {
    var maxId = 0

    this.documents.forEach(document => {
      var currentId = parseInt(document.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }); 

    return maxId
  }

  addDocument(newDocument: Document) {
    if (newDocument == null) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);
    const documentsListClone = this.documents.slice();
    this.documentListChanged.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {

    if(originalDocument == null || newDocument == null){
      return;
    }
    
    const pos = this.documents.indexOf(originalDocument);

    if(pos < 0) {
      return;
    }
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    const documentsListClone = this.documents.slice();
    this.documentListChanged.next(documentsListClone);
  }
}
