import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './nav/components/menu/menu.component';
import {RulesComponent } from './nav/components/rules/rules.component';

const routes: Routes = [
  // { path: 'menu', component: MenuComponent }
  // { path: 'register', component: NewComponent }
  { path: 'rules', component: RulesComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
