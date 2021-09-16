import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = []; // capture logs for testing 

  constructor() { }

  log(message: string) { //push
    //this.logs.push('abc') // adding new element inside array 
    this.logs.push(message);
    console.log(message);
  }
}
