import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ModalService } from 'src/app/services/modal.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.page.html',
  styleUrls: ['./profile-menu.page.scss'],
})
export class ProfileMenuPage extends CapacitorBase implements OnInit {
  profileOptions = [
    { label: 'Perfil',icon: 'finger-print-outline', link: '/perfil/self' },
    { label: 'Configuración',icon: 'cog-outline', link: '/construccion' },
    { label: 'Entrenamiento',icon: 'analytics-outline', link: '/entrenamientos' },
    { label: 'Regulación',icon: 'construct-outline', link: '/construccion' },
    { label: 'Ejercicios',icon: 'fitness-outline', link: '/construccion' },
    { label: 'Timer',icon: 'alarm-outline', link: '/timer' },
  ]

  accountOptions = [
    { label: 'Iniciar sesión',icon: 'log-in-outline', link: '/login' },
    { label: 'Registrarse',icon: 'person-circle-outline', link: '/registro' },
  ]
  userLogged: boolean = false

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private modalService: ModalService,
    private registerService: RegisterService) { 
    super()
  }

  ngOnInit() {
    if(!this.mobile){
      //this.router.navigate(['/inicio'])
    }
    this.route.url.subscribe(res => {
      if(localStorage.getItem('seo-token')){
        this.userLogged = true
      }      
    })
  }

  logout(){
    this.modalService.showModal(`Desconectarse`,
      ['¿Estás seguro de que quieres salir de tu cuenta?'],
      [{text:'Sí, desconectame', color:'primary', 
      onClick: ()=> {this.registerService.logoutFromApp().subscribe(res =>{
        if(res.data.success){
          this.registerService.logout()
          this.userLogged = false
          this.router.navigate(['/inicio'])
        }
      })
      ,this.modalService.dismiss()}},
      {text:'Cancelar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}],
      '/link'
    )
  }
}
