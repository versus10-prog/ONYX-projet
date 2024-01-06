import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
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
  redirection() {
    if (this.isConect() == true) {
      this.router.navigate(['/game'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }
}
