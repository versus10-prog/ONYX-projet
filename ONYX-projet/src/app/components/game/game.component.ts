import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  image: string = "/assets/ClickMe.png";
  contenuePage: number = 1;
  position: number = 0;
  time: Date = new Date();
  compteur: number = 0;

  constructor(private http: HttpClient) { }

  startGame() {
    this.contenuePage = 2;
    this.time = new Date();
    this.addGameh();
  }

  next() {
    this.position += 1;
    const date: Date = new Date();

    //Temps entre chaque click
    const temps: number = date.getTime() - this.time.getTime();

    this.time = date;
  }

  addGameh() {
    
    const userName = localStorage.getItem('userName');

    if (userName) {

      const apiUrl = 'https://localhost:7299/api/Gameh';

      const requestData = { userName: userName };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post(apiUrl, requestData, { headers: headers }).subscribe(
        (response) => {
          console.log('Réponse de l\'API :', response);
        },
        (error) => {
          console.error('Erreur lors de l\'appel API:', error);
        }
      );
    } else {
      console.error('Aucun user connecté.');
    }
  }

  getGameData(): void {
    const apiUrl = 'https://localhost:7299/api/Gameh';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log('Réponse de l\'API (Gameh) :', response);
      },
      error => {
        console.error('Erreur lors de l\'appel API (Gameh) :', error); 
      }
    );
  }

}