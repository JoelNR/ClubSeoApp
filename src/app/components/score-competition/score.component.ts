import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  roundsArray: any[] = [[],[]]
  total: number = 0
  @Output() emitPoints: EventEmitter<number> = new EventEmitter()

  constructor() { }
  
  ngOnInit() {}

  emitTotal(event: any){
    this.total += event
    this.emitPoints.emit(this.total)
  }
}
