import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchersPageRoutingModule } from './archers-routing.module';

import { ArchersPage } from './archers.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchersPageRoutingModule,
    HeaderModule,
    FooterModule,
    NgxUiLoaderModule
  ],
  declarations: [ArchersPage]
})
export class ArchersPageModule {}
