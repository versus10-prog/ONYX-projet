import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: any;

  constructor(private router: Router){}

  connexion(): void{

    // a modifier avec la bd
    const autentifiaction: Boolean = true;
    if (autentifiaction == true){
      localStorage.setItem('userName',JSON.stringify(this.name));
      console.log("connexion reussi");
      this.router.navigate(['/game']);
    }
    
  }
}

