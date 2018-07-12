import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  @Input() element : {};

  constructor() { }

  ngOnInit() {
  }

}
