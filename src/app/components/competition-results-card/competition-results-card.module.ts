import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CompetitionResultsCardComponent } from './competition-results-card.component';



@NgModule({
  declarations: [CompetitionResultsCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[CompetitionResultsCardComponent]
})
export class CompetitionResultsCardModule { }