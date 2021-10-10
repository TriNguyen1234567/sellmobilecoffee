import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})





export class NetworkserviceService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllMobile() {
    const getAllMobile = 'https://mobilecoffeeserver.herokuapp.com/detail';
    return this.httpClient.get<any>(getAllMobile);    
  }

  getMobile(data): Observable<any> {
    const getMobileAPI = `https://mobilecoffeeserver.herokuapp.com/detail/${data}`;
    return this.httpClient.get(getMobileAPI)
  }
     
  

}
