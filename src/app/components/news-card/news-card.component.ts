import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent extends CapacitorBase implements OnInit {
  @Input() id: string
  @Input() imgSrc: string
  @Input() title: string
  @Input() date: string
  @Input() description: string
  
  constructor() { 
    super()
  }

  ngOnInit() {}

}
