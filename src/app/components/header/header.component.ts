import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends CapacitorBase implements OnInit {
  headerOptions = [
    { label: 'Noticias', link: '/noticias' },
    { label: 'Iniciación', link: '/iniciacion' },
    { label: 'Competiciones', link: '/competiciones' },
    { label: 'Rankings y Récords', link: '/rankings' },
  ]
  profileOptions = [
    { label: 'Perfil', link: '/perfil' },
    { label: 'Regulación', link: '/regulacion' },
    { label: 'Ejercicios', link: '/ejercicios' },
    { label: 'Timer', link: '/timer' },
  ]
  popoverTrigger: string
  openProfileMenu: boolean = false

  @Input() headerLabel: string

  constructor(private router: Router,
    private menu: MenuController,) {
    super()
  }

  ngOnInit() {
    this.popoverTrigger = this.router.url
  }

  isActive(link: string) {
    return this.router.url.includes(link)
  }

  openMenu() {
    this.menu.enable(true, 'end').then(() => {
      this.menu.open('end');
    })
  }

  closeMenu() {
    this.menu.close('end');
  }

  navigate(link: string) {
    this.router.navigate([link]);
    this.menu.close('end');
  }

  show(){
    this.openProfileMenu = !this.openProfileMenu
  }
}
