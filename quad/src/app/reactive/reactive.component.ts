import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = [ 'male', 'female'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender': new FormControl('male')
    })

  }

  onSubmit() {
    debugger;
    console.log(this.signupForm);

  }

}
