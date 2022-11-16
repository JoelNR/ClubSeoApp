import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DateChipComponent } from './date-chip.component';



@NgModule({
  declarations: [DateChipComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[DateChipComponent]
})
export class DateChipModule { }