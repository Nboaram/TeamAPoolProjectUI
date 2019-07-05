import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  put(arg0: string): Observable<import("../nav/interfaces/user").User[]> {
    throw new Error("Method not implemented.");
  }
  delete(arg0: string): Observable<import("../nav/interfaces/match").Match[]> {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
