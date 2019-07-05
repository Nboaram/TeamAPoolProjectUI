import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchQueueComponent } from './games/components/match-queue/match-queue.component';
import { ChallengePageComponent } from './games/components/challenge-page/challenge-page.component';

const routes: Routes = [
  {path: 'queue', component: MatchQueueComponent},
  {path: 'challenge', component: ChallengePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
