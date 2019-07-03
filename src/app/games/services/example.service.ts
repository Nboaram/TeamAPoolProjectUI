import { Injectable } from '@angular/core';
import { ServerRequestService } from 'src/app/server-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  counter = 2;

  constructor(private serverRequest : ServerRequestService) { }

  incrementCounter() {
    this.counter = this.counter * this.counter;
    console.log(this.counter);
  }

  getUserData() : Observable<any> {
    return this.serverRequest.get('https://www.omdbapi.com/?t=test&apikey=PlzBanMe');
  }
}
