import { Component, Directive, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable() 
export class ConfigService {

  constructor(private loggerSrv : LoggerService) { }

  sayHello() {
    console.log('Hello Angular');
    this.loggerSrv.log('sayHello: from Config service got called');
  }

  getTodaysDate() {
    this.loggerSrv.log('getTodaysDate: from Config service got called');
    return new Date();
  }

  getLastLogintime() {
    this.loggerSrv.log('getTodaysDate: from Config service got called');
  }
}
