import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private request: RequestService) { }

  login(): Observable<IUser> {
    return this.request.get<IUser>('url');
  }
  register(register: object): Observable<IUser> {
    return this.request.create('http://localhost:8080/createUser', register);
  }

}
