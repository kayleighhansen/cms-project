import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
@Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'Document1', 'document number 1', 'documenturl', 'children'),
    new Document(2, 'Document2', 'document number 2', 'documenturl', 'children'),
    new Document(3, 'Document3', 'document number 3', 'documenturl', 'children'),
    new Document(4, 'Document4', 'document number 4', 'documenturl', 'children')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onDocumentSelected(document: Document) { 
    this.documentWasSelected.emit(document);
  }
}
