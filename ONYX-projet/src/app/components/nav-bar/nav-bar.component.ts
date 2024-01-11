import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router) { }

  isConect(): boolean {
    let conect = false;
    if (localStorage.getItem('userName') != null) {
      conect = true;
    }
    return conect;
  }

  deconnexion() {
    if (this.isConect() == true) {
      localStorage.removeItem("userName");
      console.log("deconnexion")
      this.router.navigate([''])
    }
    else {
      console.log("Aucune connexion")
    }

  }
  redirectionGame() {
    if (this.isConect() == true) {
      this.router.navigate(['/game'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }
  redirectionScores() {

    this.router.navigate(['/scores'])
  }
  redirectionConnect() {

    if (this.isConect() == true) {
      const deco = window.confirm("Vous allez etre deconnecté, êtes vous sur ?");
      if (deco == true) {
        localStorage.removeItem("userName");
        this.router.navigate(['/login'])
        console.log("deconnexion");
      }
    }
    else {
      this.router.navigate(['/login'])
    }
  }
}
