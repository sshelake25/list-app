import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'LT-user', // <LT-user [userInfo]="'Surekha'" [userAddress]="addesss" ></LT-user>
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userInfo: string = '';
  @Input() userAddress: any;

  @Output() userNameChanged = new EventEmitter(); // syntax.

  constructor() { }

  ngOnInit(): void {
  //  console.log(this.userInfo);

    this.userInfo = this.userInfo + ' Mr';

    //sending value or date to parent
    this.userNameChanged.emit(this.userInfo + ' Updated');
  }

}
