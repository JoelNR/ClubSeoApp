import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsPageRoutingModule } from './records-routing.module';

import { RecordsPage } from './records.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ClubRecordsCardModule } from 'src/app/components/club-records-card/club-records-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsPageRoutingModule,
    HeaderModule,
    FooterModule,
    NgxUiLoaderModule,
    ClubRecordsCardModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
