import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private request: RequestService) { }

  login(login: string): Observable<IUser> {
    return this.request.get<IUser>('http://localhost:8080/user/' + login);
  }
  register(register: object): Observable<IUser> {
    return this.request.create<IUser>('http://localhost:8080/user/', register);
  }
  findUser(username: string): Observable<IUser> {
    return this.request.getUser<IUser>('http://localhost:8080/user/' + username);
  }
  delete(username: string): Observable<IUser> {
    return this.request.deleteUser<IUser>('http://localhost:8080/user/' + username)
  }

}
