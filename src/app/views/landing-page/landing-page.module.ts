import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SwiperModule } from 'swiper/angular';
import { LandingPageSwiperComponent } from 'src/app/components/landing-page-swiper/landing-page-swiper.component';
import { SwiperItemComponent } from 'src/app/components/landing-page-swiper/swiper-item/swiper-item.component';
import { NewsCardModule } from 'src/app/components/news-card/news-card-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    HeaderModule,
    FooterModule,
    SwiperModule,
    NewsCardModule
  ],
  declarations: [LandingPagePage, LandingPageSwiperComponent, SwiperItemComponent]
})
export class LandingPagePageModule {}
