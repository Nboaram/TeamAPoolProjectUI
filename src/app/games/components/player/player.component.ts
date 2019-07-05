import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() username: string;

  constructor(private matchService: MatchService) { }

  ngOnInit() { }

  // getPlayer(matchNumber){
  //       this.matchService.getMatch(matchNumber).subscribe((data) => {
  //     this.username = data.firstPlayer;
  //   });
  // }
}
 