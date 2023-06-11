import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TrainingCardComponent } from './training-card.component';
import { DateChipModule } from '../date-chip/date-chip.module';



@NgModule({
  declarations: [TrainingCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DateChipModule
  ],
  exports:[TrainingCardComponent]
})
export class TrainingCardModule { }