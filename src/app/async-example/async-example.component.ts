import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LT-async-example',
  templateUrl: './async-example.component.html',
  styleUrls: ['./async-example.component.css']
})
export class AsyncExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// @Component({
//   selector: 'async-observable-pipe',
//   template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
// })
// export class AsyncObservablePipeComponent {
//   time = new Observable<string>((observer: Observer<string>) => {
//     setInterval(() => observer.next(new Date().toString()), 1000);
//   });
// }
