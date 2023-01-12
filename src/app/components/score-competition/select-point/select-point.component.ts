import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-point',
  templateUrl: './select-point.component.html',
  styleUrls: ['./select-point.component.scss'],
})
export class SelectPointComponent implements OnInit {
  pointArray = ['X',10,9,8,7,6,5,4,3,2,1,'M']

  @Input() modality: string
  @Output() emitNumber: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    if(this.modality== 'Sala'){
      this.pointArray.splice(6,5)
      this.pointArray.splice(0,1)
    }
  }


  emit(number: any){
    this.emitNumber.emit(number)
  }
}
