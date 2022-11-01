import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firstName: string = 'Joel'
  lastName: string = 'Navarro Rivero'
  profilePictureSrc: string = '/assets/img/iniciacion.jpeg' || '/assets/img/default-avatar.png'
  category: string = 'Arquero Olímpico'
  
  competitionArray = [{name: 'Competición 1',date: '01/02/2022', position: 'Primero', points: '120', category: 'Arco olímpico', distance:'70m', type: 'Aire Libre'},
  {name: 'Competición 2',date: '01/02/2022', position: 'Segundo', points: '220', category: 'Arco olímpico', distance:'70m', type: 'Aire Libre'},
  {name: 'Competición 3',date: '01/02/2022', position: 'Tercero', points: '320', category: 'Arco olímpico', distance:'70m', type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 'Cuarto', points: '420', category: 'Arco olímpico', distance:'70m', type: 'Aire Libre'},]

  recordsArray = [{recordName : 'Recurvo senior', distance:'70m', type: 'Aire Libre', comepetitionName: 'Campeonato 1', date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance:'70m', type: 'Aire Libre', comepetitionName: 'Campeonato 1', date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance:'70m', type: 'Aire Libre', comepetitionName: 'Campeonato 1', date: '01/01/2022'},]

  editableProfile: boolean = true
  constructor() { }

  ngOnInit() {
  }

}
