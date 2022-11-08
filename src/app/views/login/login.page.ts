import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends CapacitorBase implements OnInit {

  email: string
  password: string

  constructor(private registerService: RegisterService,
    private router: Router) { 
    super()
  }

  ngOnInit() {
  }

  submit(){
    this.registerService.login(this.email,this.password).subscribe(res => {
      if(res.data.success){
        localStorage.setItem('user_id', res.data.user.id)
        RegisterService.setToken(res.data.token)
        this.router.navigate(['/perfil/self'])
      }
    })      
  }
}
