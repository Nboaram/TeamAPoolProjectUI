import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { MatchInterface } from '../../interfaces/match-interface';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  matches: MatchInterface[];
  

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe((matches) => {
    this.matches = matches;
   });
  }

}
