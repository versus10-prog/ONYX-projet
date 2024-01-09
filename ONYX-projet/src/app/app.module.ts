import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { ScoreDetailComponent } from './components/score-detail/score-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GameModuleModule } from './components/game/game-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScoreListComponent,
    ScoreDetailComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GameModuleModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
