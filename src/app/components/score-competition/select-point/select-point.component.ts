import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-point',
  templateUrl: './select-point.component.html',
  styleUrls: ['./select-point.component.scss'],
})
export class SelectPointComponent implements OnInit {
  pointArray = ['X',10,9,8,7,6,5,4,3,2,1,'M']
  
  @Output() emitNumber: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {}


  emit(number: any){
    this.emitNumber.emit(number)
  }
}
