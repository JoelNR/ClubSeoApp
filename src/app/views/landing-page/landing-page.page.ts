import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  newsArray = [{imgSrc: '/assets/img/flechas.jpeg', title : 'Título 1', date: '01/01/2022', description: 'Descripción 1'},
  {imgSrc: '/assets/img/flechas.jpeg', title : 'Título 2', date: '01/01/2022', description: 'Descripción 2'},
  {imgSrc: '/assets/img/flechas.jpeg', title : 'Título 3', date: '01/01/2022', description: 'Descripción 3'},
  {imgSrc: '/assets/img/flechas.jpeg', title : 'Título 4', date: '01/01/2022', description: 'Descripción 4'},
  {imgSrc: '/assets/img/flechas.jpeg', title : 'Título 5', date: '01/01/2022', description: 'Descripción 5'},
  {imgSrc: '/assets/img/flechas.jpeg', title : 'Título 6', date: '01/01/2022', description: 'Descripción 6'},]

  constructor() { }

  ngOnInit() {
  }

}
