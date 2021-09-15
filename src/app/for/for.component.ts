import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  numberList = ['one','two','three','four']; 

  constructor() { }

  ngOnInit(): void {
  }

}
