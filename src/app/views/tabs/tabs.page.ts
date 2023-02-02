import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  headerOptions = [
    { label: 'Inicio',icon: 'bonfire-outline' , link: 'inicio' },
    { label: 'Competiciones',icon: 'trophy-outline', link: 'competicion' },
    { label: 'Arqueros',icon: 'body-outline', link: 'arqueros' },
    { label: 'Plusmarcas',icon: 'sparkles-outline', link: 'plusmarcas' },
    { label: 'Menú de perfil',icon: 'person-circle-outline', link: 'menu' }
  ]
  constructor(private router: Router) {}

  isActive(link: string) {
    return this.router.url.includes(link)
  }

}
