import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor(private http: HttpClient) { }

  //mock api url
  configUrl = 'assets/config-data.json';

  //get, post, put, delete
  getConfig() {
    return this.http.get<any>(this.configUrl);
  }

}
