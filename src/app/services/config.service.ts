import { Component, Directive, Injectable } from '@angular/core';

@Injectable() 
export class ConfigService {

  constructor() { }

  sayHello() {
    console.log('Hello Angular');
  }

  getTodaysDate() {
    return new Date();
  }

  getLastLogintime() {

  }
}
