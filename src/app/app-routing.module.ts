import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './nav/components/menu/menu.component';

const routes: Routes = [
  // { path: 'menu', component: MenuComponent }
  // { path: 'register', component: NewComponent }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
