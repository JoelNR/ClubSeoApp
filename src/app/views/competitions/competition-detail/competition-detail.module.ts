import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionDetailPageRoutingModule } from './competition-detail-routing.module';

import { CompetitionDetailPage } from './competition-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionDetailPageRoutingModule
  ],
  declarations: [CompetitionDetailPage]
})
export class CompetitionDetailPageModule {}
