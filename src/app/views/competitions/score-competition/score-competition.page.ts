import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-score-competition',
  templateUrl: './score-competition.page.html',
  styleUrls: ['./score-competition.page.scss'],
})
export class ScoreCompetitionPage extends CapacitorBase implements OnInit {
  archers: string[] = ['Jose Antonio Rodríguez', 'Joel Navarro']
  target: string[] = ['1A','1B']
  title: string = 'Trofeo caramelo'
  total: number[] = [0,0]
  index: number = 0

  constructor() {
    super()
   }

  ngOnInit() {
  }

  changeArcher(event: any){
    this.index = this.archers.findIndex(archer => archer == event)
  }

}
