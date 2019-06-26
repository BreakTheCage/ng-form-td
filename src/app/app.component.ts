import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  private defaultQuestion = "teacher";
  answer = '';
  genders = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    //form.setValue: Whole form
    //form.patchValue: Part of form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
  }
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
  onSubmit(){
    console.log(this.signupForm);
  }
}
