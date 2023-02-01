import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ModalService } from 'src/app/services/modal.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends CapacitorBase implements OnInit {

  email: string
  password: string
  disableLogin: boolean = false

  constructor(private registerService: RegisterService,
    private router: Router,
    private modalService: ModalService) { 
    super()
  }

  ngOnInit() {
  }

  submit(){
    this.disableLogin = true
    this.registerService.login(this.email,this.password).subscribe(res => {
      if(res.data.success){
        localStorage.setItem('user_id', res.data.user.id)
        RegisterService.setToken(res.data.token)
        this.router.navigate(['/perfil/self'])
        this.disableLogin = false
      }
    }, error => {
      this.modalService.showModal(`Parece que algo ha fallado`,
    ['Vuelva a intentarlo y si no vuelve funcionar, contacte con el club.'],
    [{text:'Cerrar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}]
    )
    this.disableLogin = false
    })      
  }
}
