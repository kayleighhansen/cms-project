import { Component, OnInit, ViewChild } from '@angular/core';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  @ViewChild('f') addDocumentForm: NgForm;

  originalDocument: Document;
  document: Document;
  editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.addDocumentForm);
  }
}
