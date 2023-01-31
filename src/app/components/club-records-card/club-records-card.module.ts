import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ClubRecordsCardComponent } from './club-records-card.component';
import { DateChipModule } from '../date-chip/date-chip.module';



@NgModule({
  declarations: [ClubRecordsCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DateChipModule
  ],
  exports:[ClubRecordsCardComponent]
})
export class ClubRecordsCardModule { }