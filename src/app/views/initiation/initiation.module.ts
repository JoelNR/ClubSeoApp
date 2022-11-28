import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiationPageRoutingModule } from './initiation-routing.module';

import { InitiationPage } from './initiation.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiationPageRoutingModule,
    HeaderModule,
    FooterModule,
    NgxUiLoaderModule,
    InputModule
  ],
  declarations: [InitiationPage]
})
export class InitiationPageModule {}
