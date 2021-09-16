import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'LT-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private myConfig: ConfigService) { }

  ngOnInit(): void {
    // let myDate = this.myConfig.getTodaysDate();
    // alert(myDate);
  }

}
