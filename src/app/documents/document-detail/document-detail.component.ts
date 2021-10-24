import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;
  id: number;

  nativeWindow: any;

  constructor(private documentService: DocumentService, 
              private route: ActivatedRoute, 
              private windowRefService: WindRefService,
              private router: Router) { 

    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    );
  } 

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    console.log("delete");
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
 }

} 
