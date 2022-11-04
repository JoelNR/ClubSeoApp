import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebModalComponent } from './web-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [WebModalComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports:[WebModalComponent]
})
export class WebModalModule { }