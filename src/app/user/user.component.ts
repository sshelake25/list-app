import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'LT-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userInfo: string = '';

  @Input() userAddress : any ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfo);

    this.userInfo = this.userInfo + ' Mr';
  }

}
