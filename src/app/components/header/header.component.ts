import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ModalService } from 'src/app/services/modal.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends CapacitorBase implements OnInit {
  headerOptions = [
    { label: 'Sobre Nosotros',icon: 'reader-outline' , link: '/nosotros' },
    { label: 'Iniciación',icon: 'megaphone-outline', link: '/iniciacion' },
    { label: 'Competiciones',icon: 'trophy-outline', link: '/competiciones' },
    { label: 'Arqueros',icon: 'body-outline', link: '/arqueros' },
    { label: 'Plusmarcas',icon: 'sparkles-outline', link: '/rankings' },
  ]
  profileOptions = [
    { label: 'Perfil',icon: 'finger-print-outline', link: '/perfil/self' },
    { label: 'Entrenamiento',icon: 'analytics-outline', link: '/entrenamiento' },
    { label: 'Regulación',icon: 'construct-outline', link: '/regulacion' },
    { label: 'Ejercicios',icon: 'fitness-outline', link: '/ejercicios' },
    { label: 'Timer',icon: 'alarm-outline', link: '/timer' },
  ]

  trigger: string
  openProfileMenu: boolean = false
  userLogged: boolean = false

  @Input() headerLabel: string
  @Input() cancelHeaderMobile: boolean = false

  constructor(private router: Router,
    private menu: MenuController,
    private modalService: ModalService,
    private registerService: RegisterService) {
    super()
  }

  ngOnInit() {
    this.trigger = this.router.url
    if(localStorage.getItem('seo-token')){
      this.userLogged = true
    }
  }

  isActive(link: string) {
    return this.router.url.includes(link)
  }

  openMenu() {
    this.menu.enable(true, 'end' + this.trigger).then(() => {
      this.menu.open('end' + this.trigger);
    })
  }

  closeMenu() {
    this.menu.close('end' + this.trigger);
  }

  navigate(link: string) {
    this.router.navigate([link]);
    this.menu.close('end' + this.trigger);
  }

  show(){
    this.openProfileMenu = !this.openProfileMenu
  }

  logout(){
    this.modalService.showModal(`Desconectarse`,
      ['¿Estás seguro de que quieres salir de tu cuenta?'],
      [{text:'Sí, desconectame', color:'primary', 
      onClick: ()=> {this.registerService.logoutFromApp().subscribe(res =>{
        if(res.data.success){
          this.registerService.logout()
          this.userLogged = false
          this.router.navigate[this.router.url]
        }
      })
      ,this.modalService.dismiss()}},
      {text:'Cancelar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}]
    )
  }
}
