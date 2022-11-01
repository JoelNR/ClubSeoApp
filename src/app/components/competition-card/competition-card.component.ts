import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.scss'],
})
export class CompetitionCardComponent extends CapacitorBase implements OnInit {

  @Input() name: string
  @Input() date: string 
  @Input() position: string
  @Input() points: number 
  @Input() category: string 
  @Input() distance: number
  @Input() type: string

  constructor() { 
    super()
  }

  ngOnInit() {}

}
