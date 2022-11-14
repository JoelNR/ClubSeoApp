import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
})
export class RecordCardComponent extends CapacitorBase implements OnInit {

  @Input() recordName : string
  @Input() distance: number
  @Input() type: string 
  @Input() date: string  
  @Input() points: number

  constructor() {
    super()
   }

  ngOnInit() {}

}
