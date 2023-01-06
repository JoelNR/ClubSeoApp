import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-see-round',
  templateUrl: './see-round.component.html',
  styleUrls: ['./see-round.component.scss'],
})
export class SeeRoundComponent implements OnInit {
  roundArray: any[] = [['-','-','-','-','-','-'],
  ['-','-','-','-','-','-'],['-','-','-','-','-','-'],
  ['-','-','-','-','-','-'],['-','-','-','-','-','-'],['-','-','-','-','-','-']]
  roundSum: number[] = [0,0,0,0,0,0]
  total: number = 0
  meanScore: number[] = [0,0,0,0,0,0]
  numberOfTens: number[] = [0,0,0,0,0,0]
  numberOfXs: number[] = [0,0,0,0,0,0]

  @Input() numberOfArrows: number = 6

  @Output() emitRound: EventEmitter<number> = new EventEmitter()

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {}

  addSet(event: any, index: number){
    this.roundArray[index] = event
    this.total -= this.roundSum[index] 
    this.emitRound.emit(-this.roundSum[index])

    this.roundSum[index] = 0
    this.meanScore[index] = 0
    this.numberOfTens[index] = 0
    this.numberOfXs[index] = 0

    this.roundArray[index].forEach(arrow => {
      if(arrow == 'X'){
        this.roundSum[index] += 10
        this.numberOfXs[index]++

      } else if (arrow != '-' && arrow != 'M'){
        if(arrow == 10){
          this.numberOfTens[index]++
        }
        this.roundSum[index] += arrow
      }
    })

    this.total += this.roundSum[index] 
    this.meanScore[index] = (this.roundSum[index] / this.numberOfArrows)
    this.scoreService.storeSet('3',this.roundArray[index],this.roundSum[index],'1')
    this.emitRound.emit(this.roundSum[index])
  }

  parcialSum(arrows: any[]){
    let sum = 0
    arrows.forEach(arrow => {
      if(arrow == 'X'){
        sum += 10
      } else if (arrow != '-' && arrow != 'M'){
        sum += arrow
      }
    });

    return sum
  }

  roundParcialSum(index: number){
    let sum = 0

    for (let i = 0; i <= index; i++) {
      sum += this.roundSum[i];
      
    }

    return sum
  }

  parseNumberOf(roundArray: number[]){
    let sum = 0
    roundArray.forEach(set => {
      sum += set
    });

    return sum
  }

  parseMeanOf(){
    let mean = 0
    let dividen = 0
    this.meanScore.forEach(setMeanScore => {
      mean += setMeanScore
    });

    dividen = this.roundArray.findIndex(set => set.some(arrow => arrow == '-'))
    dividen = dividen == -1 ? 6 : (dividen == 0 ? 1: dividen)
    return (mean / dividen).toFixed(2)
  }
}
