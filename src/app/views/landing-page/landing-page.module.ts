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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    HeaderModule,
    FooterModule,
    SwiperModule,
    
  ],
  declarations: [LandingPagePage, LandingPageSwiperComponent, SwiperItemComponent]
})
export class LandingPagePageModule {}
