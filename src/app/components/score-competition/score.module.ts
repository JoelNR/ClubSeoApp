import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './number/number.component';
import { SeeRoundComponent } from './see-round/see-round.component';
import { SeeSetComponent } from './see-set/see-set.component';
import { SelectPointComponent } from './select-point/select-point.component';
import { ScoreComponent } from './score.component';



@NgModule({
  declarations: [NumberComponent, SeeRoundComponent, SeeSetComponent, SelectPointComponent,ScoreComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports:[ScoreComponent]
})
export class ScoreModule { }