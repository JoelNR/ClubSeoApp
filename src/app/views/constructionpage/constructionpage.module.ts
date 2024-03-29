import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructionpagePageRoutingModule } from './constructionpage-routing.module';

import { ConstructionpagePage } from './constructionpage.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstructionpagePageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule
  ],
  declarations: [ConstructionpagePage]
})
export class ConstructionpagePageModule {}
