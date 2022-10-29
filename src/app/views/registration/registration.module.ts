import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { InputModule } from 'src/app/components/input/input.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    HeaderModule,
    InputModule,
    BackButtonModule,
    FooterModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
