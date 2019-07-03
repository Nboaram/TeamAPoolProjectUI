import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestyBoiService {

  constructor(private http: HttpClient) { }

  get() {

    console.log('GET CALLED!');
    return this.http.get('https://superheroapi.com/api/access-token/character-idi');
    
  }
}
