import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends CapacitorBase implements OnInit {
  firstName: string = 'Joel'
  lastName: string = 'Navarro Rivero'
  profilePictureSrc: string = '/assets/img/iniciacion.jpeg' || '/assets/img/default-avatar.png'
  category: string = 'Arquero Olímpico'
  
  competitionArray = [{name: 'Competición 1',date: '01/02/2022', position: 'Primero', points: 120 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 2',date: '01/02/2022', position: 'Segundo', points: 220 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 3',date: '01/02/2022', position: 'Tercero', points: 320 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 'Cuarto', points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 5',date: '01/02/2022', position: 'Quinto', points: 520 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 6',date: '01/02/2022', position: 'Sexto', points: 620 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 'Cuarto', points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},]

  recordsArray = [{recordName : 'Recurvo senior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance: 18 , type: 'Sala', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo Junior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},]

  editableProfile: boolean = true
  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
