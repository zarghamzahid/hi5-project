import { Component, OnInit } from '@angular/core';
import { Inquiry } from '../inquiry';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  
  inquiry = new Inquiry(" ", " ", " "," ");

  submitted = false;

  onSubmit() {this.submitted=true}



}
