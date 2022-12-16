import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

  addSet(event: any, index: number){
    this.roundArray[index] = event
    this.total -= this.roundSum[index] 
    this.roundSum[index] = 0
    this.roundArray[index].forEach(arrow => {
      if(arrow == 'X'){
        this.roundSum[index] += 10
      } else if (arrow != '-' && arrow != 'M'){
        this.roundSum[index] += arrow
      }
    });
    this.total += this.roundSum[index] 
  }
}
