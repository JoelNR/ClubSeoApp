import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ModalService } from 'src/app/services/modal.service';
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
  disableRegistration: boolean = false

  constructor(private registerService: RegisterService,
    private router: Router, private modalService: ModalService) {
    super()
   }

  ngOnInit() {
  }

  submit(){
    this.disableRegistration = true
    this.registerService.registrate(this.email,this.password, this.firstName, this.lastName).subscribe(res=>{
      if (res.data.success){
        this.router.navigate(['/login'])
        this.disableRegistration = false
      }
    },error => {
      this.modalService.showModal(`Parece que algo ha fallado`,
    ['Vuelva a intentarlo y si no vuelve funcionar, contacte con el club.'],
    [{text:'Cerrar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}]
    )
    this.disableRegistration = false
    })
  }
}
