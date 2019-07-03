import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components/register/login/login.component';
import { RegistrationComponent } from './user/components/register/registration/registration.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
