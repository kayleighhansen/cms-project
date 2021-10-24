import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})

export class DocumentItemComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;
 
  constructor(private documentService: DocumentService) { }
 
  ngOnInit() {
  }

  onSelected() {
    this.documentService.documentSelectedEvent.emit(this.document);
  } 
} 
