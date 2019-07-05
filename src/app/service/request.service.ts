import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../auth/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  create<T>(url:string, register: object): Observable <T> {
    console.log(register);
    console.log(url);
    return this.http.post<T>(url,register, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getUser<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  })
}
deleteUser<T>(url: string): Observable<T> {
  return this.http.delete<T>(url, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
}
}
