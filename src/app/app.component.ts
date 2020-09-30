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
  name: string = 'Alex';
  isFavorite: boolean = true;

  myProducts = [
    {
      id: 1,
      title: 'Gold',
      status: 'active'
    },
    {
      id: 2,
      title: 'Silver',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Bronze',
      status: 'expired'
    },
  ]


  setValueName() {
    this.name = 'Savani';
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    console.log(myForm.valid);
  }

  setDefault(myForm: NgForm) {
    myForm.resetForm({
      email: 'test@gmail.com'
    })
  }

  resetFormValue(myForm: NgForm) {
    myForm.resetForm()
  }

}
