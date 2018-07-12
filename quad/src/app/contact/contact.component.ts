import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  allowDisabled = false;
  constructor() { 
    setTimeout(() =>{
      this.allowDisabled = true;
    },12000);
  }

  ngOnInit() {
  }

}
