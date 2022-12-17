import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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


  @Output() emitRound: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  addSet(event: any, index: number){
    this.roundArray[index] = event
    this.total -= this.roundSum[index] 
    this.emitRound.emit(-this.roundSum[index])
    this.roundSum[index] = 0
    this.roundArray[index].forEach(arrow => {
      if(arrow == 'X'){
        this.roundSum[index] += 10
      } else if (arrow != '-' && arrow != 'M'){
        this.roundSum[index] += arrow
      }
    });
    this.total += this.roundSum[index] 
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
}
