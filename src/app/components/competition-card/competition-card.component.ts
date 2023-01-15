import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.scss'],
})
export class CompetitionCardComponent extends CapacitorBase implements OnInit {
  @Input() id: string
  @Input() title: string
  @Input() date: string 
  @Input() description: string
  @Input() modality: string 
  @Input() image: string
  @Input() disableButton: boolean = false

  constructor() { 
    super()
  }

  ngOnInit() {}

}
