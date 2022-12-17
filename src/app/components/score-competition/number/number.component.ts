import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  @Input() number: any
  @Input() disableColor: boolean = false
  @Output() emitEdit: EventEmitter<any> = new EventEmitter()
  
  constructor() { }

  ngOnInit() {}

  emit(){
    this.emitEdit.emit()
  }

}
