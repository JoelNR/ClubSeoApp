import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-see-set',
  templateUrl: './see-set.component.html',
  styleUrls: ['./see-set.component.scss'],
})
export class SeeSetComponent implements OnInit {
  @Input() arrowSet: any[] = []
  finishedSet: boolean = false
  writeIndex: number = 0
  @Output() emitSet: EventEmitter<number[]> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  addNumber(event: any){
    if(event == 'X'){
      this.arrowSet.unshift(event)
      this.arrowSet.splice(this.arrowSet.length-1,1)
      this.writeIndex++
    } else {
      this.arrowSet[this.writeIndex] = event
      if(event !='M'){
        this.writeIndex++
      }
      if(!this.arrowSet.some(arrow => arrow == 'M')){ 
        this.arrowSet.sort((a, b) => b-a)
      } else {
        this.mSort()
      }
    }

    

    if(this.writeIndex == 6 || !this.arrowSet.some(arrow => arrow == '-')){
      this.finishedSet = true
      this.emitSet.emit(this.arrowSet)
      return
    }

    
  }

  mSort(){
    this.arrowSet.splice(this.arrowSet.findIndex(arrow => arrow == 'M'),1)
    if(this.arrowSet.some(arrow => arrow == 'M')){
      this.mSort()
    }
    this.arrowSet.sort((a, b) => b-a)
    this.arrowSet.push('M')
    this.clearSort
  }

  clearSort(){
    this.arrowSet.splice(this.arrowSet.findIndex(arrow => arrow == '-'),1)
    if(this.arrowSet.some(arrow => arrow == '-')){
      this.clearSort()
    }
    this.arrowSet.sort((a, b) => b-a)
    this.arrowSet.push('-')
  }
}
