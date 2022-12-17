import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-competition',
  templateUrl: './score-competition.page.html',
  styleUrls: ['./score-competition.page.scss'],
})
export class ScoreCompetitionPage implements OnInit {
  archer: string = 'Jose Antonio'
  target: string = '1A'
  title: string = 'Trofeo caramelo'
  total: number = 0 
  constructor() { }

  ngOnInit() {
  }

}
