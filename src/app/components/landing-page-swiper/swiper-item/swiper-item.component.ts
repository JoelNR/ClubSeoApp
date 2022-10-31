import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-item',
  templateUrl: './swiper-item.component.html',
  styleUrls: ['./swiper-item.component.scss'],
})
export class SwiperItemComponent implements OnInit {
  @Input() title: string
  @Input() description: string
  @Input() imgSrc: string
  @Input() buttonLink: string
  
  constructor() { }

  ngOnInit() {}

}
