import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-landing-page-swiper',
  templateUrl: './landing-page-swiper.component.html',
  styleUrls: ['./landing-page-swiper.component.scss'],
})
export class LandingPageSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
