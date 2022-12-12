import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-point',
  templateUrl: './select-point.component.html',
  styleUrls: ['./select-point.component.scss'],
})
export class SelectPointComponent implements OnInit {
  pointArray = [{number: 10, color: 'yellow'},{number: 9, color: 'yellow'},{number: 8, color: 'red'},{number: 7, color: 'red'},{number: 6, color: 'blue'},
  {number: 5, color: 'blue'},{number: 4, color: 'black'},{number: 3, color: 'black'},{number: 2, color: 'white'},{number: 1, color: 'white'},]
  
  constructor() { }

  ngOnInit() {}

}
