import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { bestScoreModel } from '../../model/bestScoreModel';

@Component({
  selector: 'app-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrl: './score-detail.component.scss'
})
export class ScoreDetailComponent {

  constructor(private http: HttpClient) { }
  scores: any[] = [];

ngOnInit(): void {
  
  this.getBestScore();
}

getBestScore(){
  
  const apiUrl = 'https://localhost:7299/api/GameH';

  this.http.get<any[]>(apiUrl).subscribe(
    (response) => {
      console.log('Réponse de l\'API :', response);
      this.scores = response
    },
    (error) => {
      console.error('Erreur lors de l\'appel API:', error);
    }
  );
}

}