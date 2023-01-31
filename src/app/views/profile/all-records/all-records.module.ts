import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRecordsPageRoutingModule } from './all-records-routing.module';

import { AllRecordsPage } from './all-records.page';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RecordCardModule } from 'src/app/components/record-card/record-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRecordsPageRoutingModule,
    BackButtonModule,
    FooterModule,
    HeaderModule,
    NgxUiLoaderModule,
    RecordCardModule
  ],
  declarations: [AllRecordsPage]
})
export class AllRecordsPageModule {}
