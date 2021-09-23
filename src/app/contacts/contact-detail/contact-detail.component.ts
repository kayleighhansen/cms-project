import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contacts: Contact[] = [
    new Contact(1, 'R.Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', 'null'),
    new Contact(2, 'Rex Barzee', 'barzeer@byui.edu', '208496-3768', 'https://randomwordgenerator.com/img/picture-generator/57e6d2404a5ab10ff3d8992cc12c30771037dbf85254794e702673d4934f_640.jpg', 'null')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
