import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { WebModalModule } from '../modals/web-modal/web-modal.module';
import { SheetModalModule } from '../modals/sheet-modal/sheet-modal.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    WebModalModule,
    SheetModalModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }