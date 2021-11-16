import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})

export class DocumentListComponent implements OnInit, OnDestroy {

  documents: Document[] = [];
  isFetching: boolean;

  fetchDocumentsSubscription: Subscription;
  private documentChangeSub: Subscription;

  constructor(private documentService: DocumentService) { 
  } 
 
  ngOnInit() {
    this.LoadDocuments();
  } 

  LoadDocuments() {
    const list = this.documentService.fetchDocuments();

    this.isFetching = true;

    this.fetchDocumentsSubscription = this.documentService.fetchDocumentsEvent.subscribe((result)=> {
      this.isFetching = false;

      this.documents = result;

    });
  }

  onDocumentSelected(document: Document) { 
    this.documentService.documentSelectedEvent.emit(document);
  }

  ngOnDestroy(): void {
    this.documentChangeSub.unsubscribe();
  }
}