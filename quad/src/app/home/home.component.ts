import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() serverCreated :EventEmitter<object> = new EventEmitter();
  nerServerName= '';
  nerServerContent= '';
  onAddServer() {
    this.serverCreated.emit({
        'type':'server',
        'name': this.nerServerName,
        'content': this.nerServerContent
      })

    // this.serverElement.push({
    //   'type':'server',
    //   'name': this.nerServerName,
    //   'content': this.nerServerContent
    // })
  };

  onAddBlueprint() {
    // this.serverElement.push({
    //   'type':'blueprint',
    //   'name': this.nerServerName,
    //   'content': this.nerServerContent
    // })
  }

}
