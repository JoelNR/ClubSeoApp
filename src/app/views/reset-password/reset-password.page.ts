import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage extends CapacitorBase implements OnInit {
  email: string

  constructor(private registerService: RegisterService) { 
    super()
  }

  ngOnInit() {

  }

  submit(){
    this.registerService.forgotPassword(this.email).subscribe(res=>{
      
    })
  }

}
