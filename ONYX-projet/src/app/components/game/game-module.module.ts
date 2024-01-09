import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { EndGameComponent } from './end-game/end-game.component';
import { StartGameComponent } from './start-game/start-game.component';
import { JeuxComponent } from './jeux/jeux.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    GameComponent,
    JeuxComponent,
    StartGameComponent,
    EndGameComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent,
    NavBarComponent
  ]
})
export class GameModuleModule { }
