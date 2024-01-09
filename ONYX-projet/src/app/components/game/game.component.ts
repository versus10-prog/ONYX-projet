import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  contenuePage = 1;

  constructor(private element: ElementRef, private router: Router, private renderer: Renderer2) { }

  startGame(){
    this.contenuePage = 2;
  }
}
