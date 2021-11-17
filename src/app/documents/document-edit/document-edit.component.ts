import { Component, OnInit, ViewChild } from '@angular/core';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  originalDocument: Document;
  document: Document;
  editMode: boolean = false;
  id: string;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        if(!id) {
          this.editMode = false;
          return;
        }

        this.originalDocument = this.documentService.getDocument(id);
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDocument = new Document(
      "",
      value.name,
      value.description,
      value.url,
      value.children
    );

    if(this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel()
 {
    this.router.navigate(['/documents']);
 }}
