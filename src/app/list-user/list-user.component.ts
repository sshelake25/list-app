import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList = ['foo','bar', 'ram', 'foobar','more']; // *ngFor
 
  addesss = {
    laneNo: '450',
    Location: 'Pune',
    city: 'BAN'
  };

  title : string = 'Welcome to angular session';

  constructor() { }

  ngOnInit(): void {
  }

}
