import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetModalComponent } from './sheet-modal.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SheetModalComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [SheetModalComponent],
})
export class SheetModalModule { }
