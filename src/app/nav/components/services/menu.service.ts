import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { Match } from '../../interfaces/match';
import { User } from '../../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private req: RequestService) { }

  getUserData(url: string): Observable<User[]> {
    return this.req.get<User[]>(url);
  }

  updateMatchData(username: string): Observable<User[]> {
    // let body = JSON.stringify(username);
    return this.req.put('http//localhost:8080/match/' + username);

  }

  deleteMatchData(username: string): Observable<Match[]> {
    return this.req.delete('http//localhost:8080/match/' + username);

  }
}
