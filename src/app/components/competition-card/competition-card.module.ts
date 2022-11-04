import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CompetitionCardComponent } from './competition-card.component';



@NgModule({
  declarations: [CompetitionCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[CompetitionCardComponent]
})
export class CompetitionCardModule { }