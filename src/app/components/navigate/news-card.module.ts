import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DateChipModule } from '../date-chip/date-chip.module';
import { NavigateComponent } from './navigate.component';



@NgModule({
  declarations: [NavigateComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[NavigateComponent]
})
export class NavigateModule { }