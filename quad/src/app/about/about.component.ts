import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector :'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    @ViewChild('formControl') formValidate:NgForm;
    defaultValidate = 'teacher';

    // onSubmit(form: NgForm) {
    //     console.log(form);

    // }
    onSubmit() {
        debugger;
        console.log(this.formValidate);
    }
}