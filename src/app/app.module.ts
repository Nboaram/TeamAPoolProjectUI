import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavModule } from './nav/nav.module';
import { MenuComponent } from './nav/components/menu/menu.component';
import { RulesComponent } from './nav/components/rules/rules.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NavModule,
    AuthModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
