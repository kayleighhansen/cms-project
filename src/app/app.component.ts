import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts/contact.model';
import { ContactService } from './contacts/contact.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService],
})

export class AppComponent {

}
