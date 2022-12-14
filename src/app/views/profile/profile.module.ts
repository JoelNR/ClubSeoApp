import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { RecordCardModule } from 'src/app/components/record-card/record-card.module';
import { InputModule } from 'src/app/components/input/input.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CompetitionResultsCardModule } from 'src/app/components/competition-results-card/competition-results-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule,
    CompetitionResultsCardModule,
    RecordCardModule,
    InputModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
