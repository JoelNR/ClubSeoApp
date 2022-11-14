import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-landing-page-swiper',
  templateUrl: './landing-page-swiper.component.html',
  styleUrls: ['./landing-page-swiper.component.scss'],
})
export class LandingPageSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
