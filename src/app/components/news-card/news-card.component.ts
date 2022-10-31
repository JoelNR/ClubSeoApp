import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() imgSrc: string
  @Input() title: string
  @Input() date: string
  @Input() description: string
  
  constructor() { }

  ngOnInit() {}

}
