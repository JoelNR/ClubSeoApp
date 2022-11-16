import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

import { NewsDetailsPage } from './news-details.page';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NewsCardModule } from 'src/app/components/news-card/news-card.module';
import { DateChipModule } from 'src/app/components/date-chip/date-chip.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule,
    BackButtonModule,
    HeaderModule,
    FooterModule,
    NgxUiLoaderModule,
    NewsCardModule,
    DateChipModule
  ],
  declarations: [NewsDetailsPage]
})
export class NewsDetailsPageModule {}
