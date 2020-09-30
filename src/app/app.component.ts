import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
  mySwitchVar = "one";
  isShow: boolean = true;


  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    console.log(myForm.valid);
  }

  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'Alex',
      email: 'test@gmail.com'
    })
  }

  resetFormValue(myForm: NgForm) {
    myForm.resetForm()
  }

}
