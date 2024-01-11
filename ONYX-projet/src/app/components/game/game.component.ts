import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { aveBestModel } from '../../model/aveBestModel';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  image: string = "/assets/ClickMe.png";
  contenuePage: number = 1;
  position: number = Math.floor(Math.random() * 9);
  time: Date = new Date();
  compteur: number = 0;
  numPart: number = -1;
  dataModel: aveBestModel={average: -1,  best: -1,numPart: -1 };


  constructor(private router: Router, private http: HttpClient) { }

  startGame() {
    this.contenuePage = 2;
    this.time = new Date();
    this.addGameh();
  }

  next() {
    if (this.compteur < 5) {

      this.compteur +=1;
      this.position = Math.floor(Math.random() * 9);
      const date: Date = new Date();

      //Temps entre chaque click
      const temps: number = date.getTime() - this.time.getTime();

      this.addGamed(temps);
      this.time = date;
    }
    else{
      
      this.endGame(this.numPart);
      this.router.navigate(['/scores']);
    }
  }

  // GAMEH

  //Creation nouvelle partie
  addGameh() {
    const userName = localStorage.getItem('userName');

    if (userName) {
      const apiUrl = 'https://localhost:7299/api/Gameh';


      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post(apiUrl, userName, { headers: headers }).subscribe(
        (response) => {
          console.log('Réponse de l\'API :', response);
          this.numPart = parseInt(response.toString());
        },
        (error) => {
          console.error('Erreur lors de l\'appel API:', error);
        }
      );
    } else {
      console.error('Aucun utilisateur connecté.');
    }
  }


  //
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

  


  // GAMED

  addGamed(temps: number) {
    const apiUrl = 'https://localhost:7299/api/GameD';

    const jsonData =
    {
      "time": temps,
      "numPart": this.numPart
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(apiUrl, jsonData, { headers: headers }).subscribe(
      (response) => {
        console.log('Réponse de l\'API :', response);
      },
      (error) => {
        console.error('Erreur lors de l\'appel API:', error);
      }
    );
  }

  endGame(numPart: number){
    const apiUrl = 'https://localhost:7299/api/GameD/' + numPart;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get<aveBestModel>(apiUrl).subscribe(
      (response) => {
        console.log('Réponse de l\'API :', response);
        
        
        const apiUrl2 = 'https://localhost:7299/api/Gameh';

        this.http.put(apiUrl2, response).subscribe(
          (response: any) => {
            console.log('Réponse de l\'API (Gameh) :', response);
          },
          error => {
            console.error('Erreur lors de l\'appel API (Gameh) :', error);
          }
        );


      },
      (error) => {
        console.error('Erreur lors de l\'appel API:', error);
      }
    );
  }

}