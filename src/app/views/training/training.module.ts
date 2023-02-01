import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPageRoutingModule } from './training-routing.module';

import { TrainingPage } from './training.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { InputModule } from 'src/app/components/input/input.module';
import { TrainingCardModule } from 'src/app/components/training-card/training-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule,
    NgxUiLoaderModule,
    TrainingCardModule,
    InputModule
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
