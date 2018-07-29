import { Component,Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit ,
      OnChanges,
      DoCheck ,
      AfterContentInit ,
      AfterContentChecked,
      AfterViewInit,AfterViewChecked{
  @Input() element : { type: string,name: string,content: string};
  @ViewChild('heading') header: ElementRef;

  constructor() { 
    console.log("Constructor called");
  }


  ngOnInit() {
    console.log("ngOnInit called");
    console.log("View Content"+this.header.nativeElement.textContent);

  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");

  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");

  }
  ngAfterContentChecked () {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewChecked () {
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit() {
    console.log("View Content:"+this.header.nativeElement.textContent);

    console.log("ngAfterViewInit called");


  }

}
