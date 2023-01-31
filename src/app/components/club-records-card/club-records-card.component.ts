import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { Records } from 'src/app/models/competition';

@Component({
  selector: 'app-club-records-card',
  templateUrl: './club-records-card.component.html',
  styleUrls: ['./club-records-card.component.scss'],
})
export class ClubRecordsCardComponent extends CapacitorBase implements OnInit {

  @Input() record: Records
  open: boolean = false
  
  constructor() { 
    super()
  }

  ngOnInit() {}

}
