import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsPageRoutingModule } from './records-routing.module';

import { RecordsPage } from './records.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { RecordCardModule } from 'src/app/components/record-card/record-card.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { DateChipModule } from 'src/app/components/date-chip/date-chip.module';
import { ClubRecordsCardModule } from 'src/app/components/club-records-card/club-records-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsPageRoutingModule,
    HeaderModule,
    FooterModule,
    RecordCardModule,
    NgxUiLoaderModule,
    ClubRecordsCardModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
