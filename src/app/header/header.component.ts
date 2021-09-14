import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'LT-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
