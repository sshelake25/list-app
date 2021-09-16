import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../services/config.service';

//let myConfigService = new ConfigService();

@Component({
  selector: 'LT-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private myConfigService: ConfigService) { }

  ngOnInit(): void {
    console.log(`We are inside header component`);
    this.myConfigService.sayHello();
    let dt = this.myConfigService.getTodaysDate();
    console.log(dt);
  }

}
