import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-competition-results-card',
  templateUrl: './competition-results-card.component.html',
  styleUrls: ['./competition-results-card.component.scss'],
})
export class CompetitionResultsCardComponent extends CapacitorBase implements OnInit {

  @Input() name: string
  @Input() date: string 
  @Input() position: number
  @Input() points: number 
  @Input() category: string 
  @Input() distance: number
  @Input() type: string

  constructor() { 
    super()
  }

  ngOnInit() {}

}
