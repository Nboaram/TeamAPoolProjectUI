import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [MenuComponent, TestComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    NavModule
  ]
})
export class NavModule { }
