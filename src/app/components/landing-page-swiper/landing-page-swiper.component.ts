import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-landing-page-swiper',
  templateUrl: './landing-page-swiper.component.html',
  styleUrls: ['./landing-page-swiper.component.scss'],
})
export class LandingPageSwiperComponent extends CapacitorBase implements OnInit {
  @Input() userLogged: boolean = false
  @Input() isMember: boolean = false

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
