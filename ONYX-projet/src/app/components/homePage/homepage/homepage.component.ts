import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) { }

  isConect(): boolean {
    let conect = false;
    if (localStorage.getItem('userName') != null) {
      conect = true;
    }
    return conect;
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
