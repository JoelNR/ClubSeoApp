import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';

import { ResetPasswordPage } from './reset-password.page';
import { InputModule } from 'src/app/components/input/input.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    InputModule,
    HeaderModule,
    BackButtonModule
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
