import { Component, OnInit } from '@angular/core';
import {Inquiry} from '../inquiry';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  inquiry = new Inquiry(" ", " ", " "," ");

  submitted = false;

  onSubmit() {this.submitted=true}

}
