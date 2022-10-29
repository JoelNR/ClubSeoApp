import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends CapacitorBase implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

  submit(){
    
  }
}
