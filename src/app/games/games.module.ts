import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './components/queue/queue.component';
import { MatchComponent } from './components/match/match.component';
import { MatchQueueComponent } from './components/match-queue/match-queue.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ExampleService } from './services/example.service';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [QueueComponent, MatchComponent, MatchQueueComponent, ChallengeComponent, PlayerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QueueComponent,
    MatchComponent,
    MatchQueueComponent,
    ChallengeComponent
  ],
  providers: [
    ExampleService
  ]
})
export class GamesModule { }
