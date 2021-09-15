import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  numberList = ['one','two','three','four']; 

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
