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
  documents: Document[];
  private documentChangeSub: Subscription;

  constructor(private documentService: DocumentService) { 
    //this.documents = this.documentService.getDocuments();
  } 
 
  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.documentChangeSub = this.documentService.documentChanged.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );
  } 

  onDocumentSelected(document: Document) { 
    this.documentService.documentSelectedEvent.emit(document);
  }

  ngOnDestroy(): void {
    this.documentChangeSub.unsubscribe();
  }
}


