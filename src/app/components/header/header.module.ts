import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }