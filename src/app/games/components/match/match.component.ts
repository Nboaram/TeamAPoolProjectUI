import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { MatchInterface } from '../../interfaces/match-interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: MatchInterface;
   firstPlayer = 'text';
   secondPlayer= 'text';

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    console.log(this.match);
     this.firstPlayer = this.match.playerOne;
     this.secondPlayer = this.match.playerTwo;
  }

}
