import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Document } from '../documents/document.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
 
export class DocumentService {

  documentSelectedEvent = new EventEmitter<Document>();
  documentListChanged = new Subject<Document[]>();
  fetchDocumentsEvent = new Subject<Document[]>();

  private documents: Document[] = [];
  maxDocumentId: number;


  constructor(private http: HttpClient) { 
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments() {
    this.http.get('https://cms-project-3527d-default-rtdb.firebaseio.com/documents.json').subscribe((result: any) => {
      this.documents = result;
      this.maxDocumentId = this.getMaxId();

      this.documents.sort((a , b) => 
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.documentListChanged.next(this.documents.slice());
      },
    );
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
    this.storeDocuments();
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

  storeDocuments() {
    let documents = JSON.stringify(this.documents);

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://cms-project-3527d-default-rtdb.firebaseio.com/documents.json', headers)
      .subscribe(
        () => {
          this.documentListChanged.next(this.documents.slice());
        }
      );
  }

  addDocument(newDocument: Document) {
    if (newDocument == null) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);
    const documentsListClone = this.documents.slice();

    this.storeDocuments();
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

    this.storeDocuments();
  }
}
