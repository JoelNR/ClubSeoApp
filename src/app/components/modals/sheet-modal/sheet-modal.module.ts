import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetModalComponent } from './sheet-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SheetModalComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [SheetModalComponent],
})
export class SheetModalModule { }
