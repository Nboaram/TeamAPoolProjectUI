import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-second-player',
  templateUrl: './second-player.component.html',
  styleUrls: ['./second-player.component.scss']
})
export class SecondPlayerComponent implements OnInit {

  @Input() username: string;

  constructor(private matchService: MatchService) { }

  ngOnInit() { }

//   getPlayer(matchNumber){
//     this.matchService.getMatch(matchNumber).subscribe((data) => {
//   this.username = data.secondPlayer;
// });
//}

}
