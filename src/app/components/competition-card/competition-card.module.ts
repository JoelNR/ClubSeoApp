import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CompetitionCardComponent } from './competition-card.component';
import { DateChipModule } from '../date-chip/date-chip.module';



@NgModule({
  declarations: [CompetitionCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DateChipModule
  ],
  exports:[CompetitionCardComponent]
})
export class CompetitionCardModule { }