import { Component, ContentChild, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-password-input-visibility',
  templateUrl: './password-input-visibility.component.html',
  styleUrls: ['./password-input-visibility.component.scss'],
})
export class PasswordInputVisibilityComponent extends CapacitorBase {
  showPassword = false;
  @ContentChild(IonInput) input: IonInput;

  constructor() {
    super()
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
