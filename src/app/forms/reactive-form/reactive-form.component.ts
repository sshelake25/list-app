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
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("s", Validators.required),
    email: new FormControl("", Validators.email),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    language: new FormControl(""),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.profileForm)
  }

  onSubmit() {
    console.log(this.profileForm)
  }

}
