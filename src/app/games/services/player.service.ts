import { Injectable } from '@angular/core';
import { ServerRequestService } from 'src/app/server-request.service';
import { Observable } from 'rxjs';
import { PlayerInterface } from '../interfaces/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private serverRequest: ServerRequestService) { }

  getUserData(username) : Observable<PlayerInterface> {
    return this.serverRequest.get<PlayerInterface>('/localhost:8080/user/' + username);
  }
}
