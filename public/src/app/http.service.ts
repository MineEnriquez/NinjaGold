import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.e2endtest(7);
  }
  e2endtest(num: any) {
    return this._http.post('/e2etest', num);
  }
  newGame(body: any) {
    return this._http.post('/api/ninjas/newGame', body);
  }
  retriveAll(){
    return this._http.get('/api/ninjas/retrieveall');
  }
}

