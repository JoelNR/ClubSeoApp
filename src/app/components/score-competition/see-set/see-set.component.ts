import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-see-set',
  templateUrl: './see-set.component.html',
  styleUrls: ['./see-set.component.scss'],
})
export class SeeSetComponent implements OnInit {
  @Input() arrowSet: any[] = []
  showSelectPoints: boolean = false
  finishedSet: boolean

  lastWrite: any
  writeIndex: number = 0

  
  editActivated: boolean = false
  editIndex: number

  @Output() emitSet: EventEmitter<number[]> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.finishedSet = !this.arrowSet.some(arrow => arrow == '-')
  }

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
      this.lastWrite = event
      this.setSort();
    }

    

    if(this.writeIndex == 6 || !this.arrowSet.some(arrow => arrow == '-')){
      this.finishedSet = true
      this.showSelectPoints = false
      this.emitSet.emit(this.arrowSet)
      return
    }

    
  }

  private setSort() {
    if (!this.arrowSet.some(arrow => arrow == 'M')) {
      this.arrowSet.sort((a, b) => b - a);
    } else {
      this.mSort();
    }
  }

  mSort(){
    this.arrowSet.splice(this.arrowSet.findIndex(arrow => arrow == 'M'),1)
    if(this.arrowSet.some(arrow => arrow == 'M')){
      this.mSort()
    }
    this.arrowSet.sort((a, b) => b-a)
    this.arrowSet.push('M')
  }

  resetSet(){
    this.showSelectPoints = true
    this.arrowSet = ['-','-','-','-','-','-']
    this.finishedSet = false
    this.writeIndex = 0
    this.emitSet.emit(this.arrowSet)
  }

  editNumber(index: number){
    if(this.finishedSet && !this.showSelectPoints){
      this.editActivated = true
      this.editIndex = index   
      this.emitSet.emit(this.arrowSet)   
    }
  }

  updateNumber(event: any,){
    if(event == 'X'){
      this.arrowSet.splice(this.editIndex,1)
      this.arrowSet.unshift('X')
    } else {
      this.arrowSet[this.editIndex] = event
    }
    this.editActivated = false
    this.editIndex = null
    this.setSort()
    this.emitSet.emit(this.arrowSet)
  }

  undoArrow(){
    if(this.lastWrite != 'M'){
      this.writeIndex--
    }
    let lastWritenIndex = this.arrowSet.findIndex(arrow => arrow == this.lastWrite)
    this.arrowSet.splice(lastWritenIndex,1)
    let newLastWritenIndex =  this.arrowSet.findIndex(arrow => arrow == '-')
    this.lastWrite = newLastWritenIndex  != 0 ? this.arrowSet[newLastWritenIndex-1] : this.arrowSet[newLastWritenIndex]
    this.arrowSet.push('-')
    this.setSort()
  }
}
