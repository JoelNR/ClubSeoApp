import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMenuPageRoutingModule } from './profile-menu-routing.module';

import { ProfileMenuPage } from './profile-menu.page';
import { NavigateModule } from 'src/app/components/navigate/news-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMenuPageRoutingModule,
    NavigateModule
  ],
  declarations: [ProfileMenuPage]
})
export class ProfileMenuPageModule {}
