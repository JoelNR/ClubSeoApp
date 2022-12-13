import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-see-set',
  templateUrl: './see-set.component.html',
  styleUrls: ['./see-set.component.scss'],
})
export class SeeSetComponent implements OnInit {
  arrowSet: any[] = []
  finishedSet: boolean = false

  @Output() emitSet: EventEmitter<number[]> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  addNumber(event: any){
    if(event == 'X'){
      this.arrowSet.unshift(event)
    } else {
      this.arrowSet.push(event)
      
      if(!this.arrowSet.some(arrow => arrow == 'M')){ 
        this.arrowSet.sort((a, b) => b-a)
      } else {
        this.customSort()
      }
    }

    if(this.arrowSet.length == 6){
      this.finishedSet = true
      this.emitSet.emit(this.arrowSet)
    }
  }

  customSort(){
    this.arrowSet.splice(this.arrowSet.findIndex(arrow => arrow == 'M'),1)
    if(this.arrowSet.some(arrow => arrow == 'M')){
      this.customSort()
    }
    this.arrowSet.sort((a, b) => b-a)
    this.arrowSet.push('M')
  }
}
