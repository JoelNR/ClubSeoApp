import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage extends CapacitorBase implements OnInit {

  firstName: string
  lastName: string
  email: string
  password: string

  constructor(private registerService: RegisterService) {
    super()
   }

  ngOnInit() {
  }

  submit(){
    this.registerService.registrate(this.email,this.password, this.firstName + ' ' + this.lastName).subscribe(x=>{})
  }
}
