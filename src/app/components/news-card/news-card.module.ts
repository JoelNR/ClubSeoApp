import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewsCardComponent } from './news-card.component';
import { DateChipModule } from '../date-chip/date-chip.module';



@NgModule({
  declarations: [NewsCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DateChipModule
  ],
  exports:[NewsCardComponent]
})
export class NewsCardModule { }