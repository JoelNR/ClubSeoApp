import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-swiper-item',
  templateUrl: './swiper-item.component.html',
  styleUrls: ['./swiper-item.component.scss'],
})
export class SwiperItemComponent extends CapacitorBase implements OnInit {
  @Input() title: string
  @Input() description: string
  @Input() imgSrc: string
  @Input() buttonLink: string
  
  constructor() {
    super()
   }

  ngOnInit() {}

}
