import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-match-queue',
  templateUrl: './match-queue.component.html',
  styleUrls: ['./match-queue.component.scss']
})
export class MatchQueueComponent implements OnInit {

  constructor(private examp: ExampleService) { }

  ngOnInit() {
  }

  clicked(){
    this.examp.incrementCounter();
  }
}
