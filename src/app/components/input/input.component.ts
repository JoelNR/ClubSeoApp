import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

interface ValidationFunction { (text: string): string | null }
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends CapacitorBase implements OnInit {

  @Input() type: string = 'text'; //email, password
  @Input() placeholder: string
  @Input() value: string = '';
  @Input() validate: ValidationFunction
  @Input() matchingValue: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  isShown: boolean = true;
  errorMessage: string | null = null;

  constructor() { 
    super()
  }

  ngOnInit() { }

  checkFocus() {
    this.errorMessage = null
    this.isShown = false
  }

  OnUdateInputText(matchText: string | null) {

    if (matchText) {
      this.checkIfMatch();
      this.isShown = true
      if (this.value === '') {
        this.value = undefined
      }
    } else {
      this.errorMessage = this.validate(this.value);
      this.isShown = true
      if (this.value === '') {
        this.value = undefined
      }
    }

  }

  checkIfMatch() {

    if (this.value === this.matchingValue) {
      this.errorMessage = 'valid'
    } else {
      this.errorMessage = 'Passwort bestätigen stimmt nicht mit neuem Passwort überein.'
    }

  }
}
