import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  serverElement = [];
  nerServerName= '';
  nerServerContent= '';
  onAddServer() {
    this.serverElement.push({
      'type':'server',
      'name': this.nerServerName,
      'content': this.nerServerContent
    })
  };

  onAddBlueprint() {
    this.serverElement.push({
      'type':'blueprint',
      'name': this.nerServerName,
      'content': this.nerServerContent
    })
  }

}
