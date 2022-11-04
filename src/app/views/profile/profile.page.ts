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
  category: string = 'Olímpico'
  email: string = 'test@test.com'
  telephone: string = '612345678'
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']
  
  competitionArray = [{name: 'IV Tirada de la Liga Atirca',date: '01/02/2022', position: 1, points: 120 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Campeonato de Canarias',date: '01/02/2022', position: 2, points: 220 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Campeonato el arcoiris',date: '01/02/2022', position: 3, points: 320 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 4, points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 5',date: '01/02/2022', position: 5, points: 520 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 6',date: '01/02/2022', position: 6 , points: 620 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 7, points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},]

  recordsArray = [{recordName : 'Recurvo senior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance: 18 , type: 'Sala', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo Junior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},]

  editableProfile: boolean = true
  editProfileActive: boolean = false

  constructor() { 
    super()
  }

  ngOnInit() {
  }

  updateProfile(){
    this.editProfileActive = false
  }

  changeCategory(event){
    this.category = event.detail.value
  }

  validateText(text: string): string|null {
    var text_format = /^[A-Za-z-äöüÄÖÜùûüÿàâæéèêëïîôœÙÛÜŸÀÂÆÉÈÊËÏÎÔŒß' ]*$/;
    if(text !== undefined && text !== ''){
      if (!text_format.test(text) ) {
        return 'El formato no es correcto, no debe incluir números.';
      }
      if(text_format.test(text)){
        return 'valid';
      }
      }
    
    return null;
  }

  validatePhone(text: string): string|null {
    var text_format = /^[0-9]{9}$/;
    if(text !== undefined && text !== ''){
      if (!text_format.test(text) ) {
        return 'El formato no es correcto, debe incluir 9 dígitos.';
      }
      if(text_format.test(text)){
        return 'valid';
      }
      }
    
    return null;
  }

  validateEmail(text: string): string|null {
    var mail_format = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(text !== undefined && text !== ''){
      if (!mail_format.test(text) ) {
        return 'El formato del email no es correcto.';
      }
      if(mail_format.test(text)){
        return 'valid';
      }
    }
    return null;

  }

  validatePassword(text: string): string|null {
    var password_format = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()\\-_=+{}|?>.<,:;]{8,16}/;
    if(text !== undefined){
      if (!password_format.test(text) && text !== '') {
        return 'La contraseña debe estar formada por mínimo 8 carácteres, incluyendo letras y números.';
      }
      if(password_format.test(text)){
      
        return 'valid';
      }

    }
  
    return null;
  }

}
