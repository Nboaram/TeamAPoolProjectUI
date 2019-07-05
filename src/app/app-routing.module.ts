import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './nav/components/menu/menu.component';
import {RulesComponent } from './nav/components/rules/rules.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { MatchQueueComponent } from './games/components/match-queue/match-queue.component';
import { ChallengePageComponent } from './games/components/challenge-page/challenge-page.component';

const routes: Routes = [
  {path: 'rules', component: RulesComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'queue', component: MatchQueueComponent},
  {path: 'challenge', component: ChallengePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
