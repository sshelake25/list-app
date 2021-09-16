import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  model = {
    email:'',
    fname:'',
    lname:'',
    password:'',
    lang:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
    //api request store value db
  }
}
