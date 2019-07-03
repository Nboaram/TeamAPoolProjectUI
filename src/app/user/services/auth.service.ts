import { Injectable } from '@angular/core';
import { RequestHandlerService } from './request-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private request: RequestHandlerService) { }

  login(){
    this.request.get().subscribe((data) => {
      let user = JSON.parse(data);
      let userstore = { "user": user["username"] }
      sessionStorage.setItem("user", JSON.stringify(userstore))});

  }
}
