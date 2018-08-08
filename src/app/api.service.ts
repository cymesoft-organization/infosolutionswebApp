import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {
  private appURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(customer) {
    return this.http.post(this.appURL + 'login', JSON.stringify({ customer: customer }));
  }
  // Get Login user data from Localstorage
  getLocalSession(sessionData) {
    return localStorage.getItem(sessionData);
  }
  // Get Login user data from Localstorage
  setLocalSession(data, name) {
    localStorage.setItem(name, JSON.stringify(data));
  }

}
