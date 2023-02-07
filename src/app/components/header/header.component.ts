import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ModalService } from 'src/app/services/modal.service';
import { ProfileService } from 'src/app/services/profile.service';
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
    { label: 'Competiciones',icon: 'trophy-outline', link: '/competicion' },
    { label: 'Arqueros',icon: 'body-outline', link: '/arqueros' },
    { label: 'Plusmarcas',icon: 'sparkles-outline', link: '/plusmarcas' },
  ]
  profileOptions = [
    { label: 'Perfil',icon: 'finger-print-outline', link: '/perfil/self' },
    { label: 'Configuración',icon: 'cog-outline', link: '/config' },
    { label: 'Entrenamiento',icon: 'analytics-outline', link: '/entrenamientos' },
    { label: 'Regulación',icon: 'construct-outline', link: '/construccion' },
    { label: 'Ejercicios',icon: 'fitness-outline', link: '/construccion' },
    { label: 'Timer',icon: 'alarm-outline', link: '/timer' },
  ]

  trigger: string
  triggerOption: number = 0
  openProfileMenu: boolean = false
  userLogged: boolean = false
  profileImage: string = '/assets/img/default-avatar.png'

  constructor(private router: Router,
    private menu: MenuController,
    private modalService: ModalService,
    private registerService: RegisterService,
    private profileService: ProfileService,
    private route: ActivatedRoute) {
    super()
  }

  ngOnInit() {
    this.trigger = this.router.url
    this.route.url.subscribe(res => {
      if(localStorage.getItem('seo-token')){
        this.trigger += localStorage.getItem('user_id')
        this.userLogged = true
        this.profileService.profile(localStorage.getItem('user_id')).subscribe(res => {
          this.profileImage = res.data.profile.image
        })
      }      
    })
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

  @ViewChild('popover') popover

  isOpen = false

  presentPopover(e: Event) {
    this.popover.event = e
    this.isOpen = true
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
          this.router.navigate(['/inicio'])
        }
      })
      ,this.modalService.dismiss()}},
      {text:'Cancelar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}],
      '/link'
    )
  }
}
