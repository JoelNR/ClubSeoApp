import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-round',
  templateUrl: './see-round.component.html',
  styleUrls: ['./see-round.component.scss'],
})
export class SeeRoundComponent implements OnInit {
  roundArray: any[] = []

  constructor() { }

  ngOnInit() {}

  addSet(event: any){
    this.roundArray.push(event)
  }
}
