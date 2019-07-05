import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-logged-in-user',
  templateUrl: './logged-in-user.component.html',
  styleUrls: ['./logged-in-user.component.scss']
})
export class LoggedInUserComponent implements OnInit {

  username = 'user';
  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getUserData(sessionStorage.getItem('user')).subscribe((data) => {
      this.username = data.username;
      console.log(data);
    });
  }

}
