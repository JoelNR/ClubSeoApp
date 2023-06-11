import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebModalComponent } from './web-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WebModalComponent],
  imports: [
    CommonModule, IonicModule, FormsModule, RouterModule
  ],
  exports:[WebModalComponent]
})
export class WebModalModule { }