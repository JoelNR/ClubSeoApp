import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage extends CapacitorBase implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {

  }

  submit(){
    
  }

}
