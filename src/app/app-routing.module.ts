import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchQueueComponent } from './games/components/match-queue/match-queue.component';

const routes: Routes = [
  {path: 'queue', component : MatchQueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
