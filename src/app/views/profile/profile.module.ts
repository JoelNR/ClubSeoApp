import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { CompetitionCardModule } from 'src/app/components/competition-card/competition-card.module';
import { RecordCardModule } from 'src/app/components/record-card/record-card.module';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule,
    CompetitionCardModule,
    RecordCardModule,
    InputModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
