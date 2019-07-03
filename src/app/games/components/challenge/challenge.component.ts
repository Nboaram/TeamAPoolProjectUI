import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  constructor(private examp : ExampleService) { }

  ngOnInit() {
  }

  clicked() {
    this.examp.getUserData()
      .subscribe((data) => {
      console.log('data' , data);
    });
  }
  
}
