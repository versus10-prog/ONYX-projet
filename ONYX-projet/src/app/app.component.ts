import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Assure-toi que le chemin est correct
  styleUrls: ['./app.component.scss']     // Assure-toi que le chemin est correct
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}
}
