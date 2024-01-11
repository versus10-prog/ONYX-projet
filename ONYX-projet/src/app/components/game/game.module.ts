import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    GameComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GameComponent,
    NavBarComponent
  ]
})
export class GameModule { }
