import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // numbers = interval(10); //decelared 
  title = 'contact-list';

  tobeConverted = 'Hello amm sss W s foo BBA';

  todaysDate = new Date();

  imageUrl1 = './assets/user.png';
  imageUrl2 = '';
  defaultUrl = './assets/default.png';


  // bussiness logic
  // 

  ngOnInit() {
    // this.numbers.subscribe((value) => console.log("Subscriber: " + value));
  }
}
