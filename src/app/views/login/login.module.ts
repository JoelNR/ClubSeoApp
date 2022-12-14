import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderModule,
    BackButtonModule,
    InputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
