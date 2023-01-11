import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoundModel } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-see-round',
  templateUrl: './see-round.component.html',
  styleUrls: ['./see-round.component.scss'],
})
export class SeeRoundComponent implements OnInit {
  roundArray: any[] = []
  roundSum: number[] = []
  total: number = 0
  meanScore: number[] = []
  numberOfTens: number[] = []
  numberOfXs: number[] = []
  setId: string[] = []
  showRound: boolean = false

  numberOfArrows: number = 6
  numberOfSets: number = 6

  @Input() modality: string
  @Input() roundModel: RoundModel
  @Input() archerId: string

  @Output() emitRound: EventEmitter<number> = new EventEmitter()

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.numberOfArrows = this.modality == 'Sala' ? 3 : 6
    this.numberOfSets = this.modality == 'Sala' ? 10 : 6
    this.setArrays()
  }

  setArrays(){
    for (let i = 0; i < this.numberOfSets; i++) {
      this.roundArray.push([])
      for (let index = 0; index < this.numberOfArrows; index++) {
        this.roundArray[i].push('-')
      }
      this.roundSum.push(0)
      this.meanScore.push(0)
      this.numberOfTens.push(0)
      this.numberOfXs.push(0)
      this.setId.push('-1')
    }

    this.showRound = true
  }

  addSet(event: any, index: number){
    console.log(index);
    
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
    if (this.setId[index] == '-1'){
      this.scoreService.storeSet(this.archerId,this.roundArray[index],this.roundSum[index],this.roundModel.id).subscribe(res => {
        this.setId[index] = res.data.set.id
      })      
    } else {
      this.scoreService.updateSet(this.setId[index],this.roundArray[index],this.roundSum[index]).subscribe(res => {})
    }

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
    dividen = dividen == -1 ? this.numberOfArrows : (dividen == 0 ? 1: dividen)
    return (mean / dividen).toFixed(2)
  }
}
