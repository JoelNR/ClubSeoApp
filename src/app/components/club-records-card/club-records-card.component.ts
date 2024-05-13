import { Component, Input, OnInit } from '@angular/core';
import { Records } from 'src/app/models/competition';

@Component({
  selector: 'app-club-records-card',
  templateUrl: './club-records-card.component.html',
  styleUrls: ['./club-records-card.component.scss'],
})
export class ClubRecordsCardComponent implements OnInit {

  @Input() record: Records
  
  constructor() { 
  }

  ngOnInit() {}

}
