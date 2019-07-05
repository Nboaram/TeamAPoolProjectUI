import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
 

  constructor(private router: Router) 
    { }

  ngOnInit() {
  }

  clicked() {
    this.router.navigate(['/challenge']);
  }
  
}
