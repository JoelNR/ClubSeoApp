import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input() headerLabel: string

  constructor(private router: Router,) { 
    super()
  }

  ngOnInit() {
    this.popoverTrigger = this.router.url
  }

  isActive(link: string){
    return this.router.url.includes(link)
  }
}
