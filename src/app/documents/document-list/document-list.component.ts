import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[];
  documentId: string = '';

  constructor(private documentService: DocumentService) { 
    this.documents = this.documentService.getDocuments();
  }

  ngOnInit(): void {
  } 

  onDocumentSelected(document: Document) { 
    this.documentService.documentSelectedEvent.emit(document);
  }
}
