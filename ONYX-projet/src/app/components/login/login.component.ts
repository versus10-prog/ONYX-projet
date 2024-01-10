import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: any;

  constructor(private router: Router, private http: HttpClient) { }

  connexion(): void {
    if (localStorage.getItem('userName') == null) {
      localStorage.setItem('userName', JSON.stringify(this.name));
      console.log("connexion reussi");
    }
    this.router.navigate(['/game']);
  }

  addUser(userName: string): void {
    const apiUrl = 'https://localhost:7299/api/User';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      userName: userName
    };

    this.http.post(apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Réponse de l\'API :', response);

      },
      error => {
        console.error('Erreur lors de l\'appel API:', error);

      }
    );
  }
}

