import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { PasswordInputVisibilityComponent } from './password-input-visibility/password-input-visibility.component';



@NgModule({
  declarations: [InputComponent, PasswordInputVisibilityComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports:[InputComponent]
})
export class InputModule { }