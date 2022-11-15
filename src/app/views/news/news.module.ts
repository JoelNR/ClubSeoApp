import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NewsCardModule } from 'src/app/components/news-card/news-card-module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    HeaderModule,
    FooterModule,
    NewsCardModule,
    BackButtonModule,
    NgxUiLoaderModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
