import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 addNumber =false;
oddNumber = [1,3,5];
evenNumber = [2,4];


  ngOnInit() {
  }

}
