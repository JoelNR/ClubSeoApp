import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button.component';



@NgModule({
  declarations: [BackButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[BackButtonComponent]
})
export class BackButtonModule { }