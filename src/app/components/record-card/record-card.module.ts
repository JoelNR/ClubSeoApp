import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RecordCardComponent } from './record-card.component';



@NgModule({
  declarations: [RecordCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[RecordCardComponent]
})
export class RecordCardModule { }