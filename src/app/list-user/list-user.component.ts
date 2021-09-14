import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  isUnchanged = true;
  itemImageUrl = "./assets/user.png";

  userList = ['foo', 'bar', 'ram', 'foobar', 'more']; // *ngFor

  addesss = {
    laneNo: '450',
    Location: 'Pune',
    city: 'BAN'
  };

  title: string = 'Welcome to angular session';

  childRecivedData: string = '';

  twoWayExm : any;

  constructor() { }

  ngOnInit(): void {
  }

  getUpdateName(data: any) {
    this.childRecivedData = data;
  }

  handleClick() {
    alert('button is cliked')
  }

  callPhone(phone: string) {
    alert(phone)
  }

}
