import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuService) { }

  ngOnInit(): void {
    sessionStorage.setItem('user', 'testItem');
  }

  username = sessionStorage.getItem('user');

  getUser() {
    this.menu.getUserData('http//localhost:8080/user/' + this.username).subscribe((data) => {

      for (let x = 0; x < data.length; x++)(
        console.log('data', data[x].username)
      )
    });
  }

  deleteMatch() {
    console.log('delete match method needs inputting here')
    let username = sessionStorage.getItem("user");
    this.menu.deleteMatchData(username);

  }

  updateMatch() {
    console.log('update match method needs inputting here')
    let username = sessionStorage.getItem("user");
    this.menu.updateMatchData(username);
  }

}