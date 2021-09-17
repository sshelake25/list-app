import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'LT-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private myroute: ActivatedRoute) { }

  ngOnInit(): void {
    //get query param data in component
    //http://localhost:4200/about-us?q=ind&s=bag

    console.log(this.myroute.outlet)

    this.myroute.queryParams.subscribe(params => {
      console.log(params);
    });

    this.myroute.data.subscribe(result => {
      console.log(result)
    });

  }

}
