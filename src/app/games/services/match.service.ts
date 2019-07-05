import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchInterface } from '../interfaces/match-interface';
import { ServerRequestService } from 'src/app/server-request.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private serverRequest: ServerRequestService) { }

  getMatch(matchNumber) :Observable<MatchInterface> {
    return this.serverRequest.get<MatchInterface>('http://localhost:8080/match/' + matchNumber);
  }

  getAllMatches() :Observable<MatchInterface[]> {
    return this.serverRequest.get<MatchInterface[]>('http://localhost:8080/match');
  }
}
