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
    new Document(1, 'CIT 260 Object Oriented Programming', 'CIT 260 - Learn how to develop modern web applications using the MEAN stack', 'documenturl', 'children'),
    new Document(2, 'ECEN 106 Computer Systems', 'ECEN 106 - Learn how to do math in binary as well as use an arduino kit', 'documenturl', 'children'),
    new Document(3, 'CIT 199R Software Consulting', 'CIT 499R - Working with real companies and non-profits to complete projects', 'documenturl', 'children'),
    new Document(4, 'CIT 365 .NET Software Development', 'CIT 365 - Learning C# and .NET Frameworks', 'documenturl', 'children')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onDocumentSelected(document: Document) { 
    this.documentWasSelected.emit(document);
  }
}
