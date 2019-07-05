import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {

  username = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

}
