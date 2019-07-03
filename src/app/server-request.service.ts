import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor(private http: HttpClient) { }

  get (url : string): Observable<any> {
    return this.http.get(url);
  }
}
