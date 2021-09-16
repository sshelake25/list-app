import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'LT-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  langs: string[] = ["English", "French", "German"];

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("s"),
    email: new FormControl(""),
    password: new FormControl("12345"),
    language: new FormControl(""),
  });


  constructor() { }

  ngOnInit(): void {
    console.log(this.profileForm)
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }

}
