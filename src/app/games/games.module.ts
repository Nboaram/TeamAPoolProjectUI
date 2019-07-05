import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './components/queue/queue.component';
import { MatchComponent } from './components/match/match.component';
import { MatchQueueComponent } from './components/match-queue/match-queue.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { PlayerComponent } from './components/player/player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChallengePageComponent } from './components/challenge-page/challenge-page.component';
import { PlayerService } from './services/player.service';
import { LoggedInUserComponent } from './components/logged-in-user/logged-in-user.component';
import { SecondPlayerComponent } from './components/second-player/second-player.component';

@NgModule({
  declarations: [QueueComponent, MatchComponent, MatchQueueComponent, ChallengeComponent, PlayerComponent, ChallengePageComponent, LoggedInUserComponent, SecondPlayerComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    QueueComponent,
    MatchComponent,
    MatchQueueComponent,
    
    ChallengeComponent
  ],
  providers: [
    PlayerService
  ]
})
export class GamesModule { }
