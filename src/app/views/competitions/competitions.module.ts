import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionsPageRoutingModule } from './competitions-routing.module';

import { CompetitionsPage } from './competitions.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionsPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [CompetitionsPage]
})
export class CompetitionsPageModule {}
