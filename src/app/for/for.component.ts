import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  numberList = ['one','two','three','four']; 

  isPresent = false;

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 20
    },
    {
      "name": "Mcleod  Mueller",
      "age": 25
    },
    {
      "name": "Day  Meyers",
      "age": 30
    },
    {
      "name": "Aguirre  Ellis",
      "age": 40
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
