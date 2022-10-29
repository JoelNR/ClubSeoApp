import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage extends CapacitorBase implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
  }

  submit(){
    
  }
}
