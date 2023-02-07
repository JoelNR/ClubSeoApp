import { Capacitor } from '@capacitor/core';

export class CapacitorBase {
  get mobile(): boolean {
    return Capacitor.isNativePlatform();
  }

  get isIPhone(): boolean {
    return Capacitor.getPlatform() === 'ios';
  }

  validateText(text: string): string|null {
    var text_format = /^[a-zA-Z\u00C0-\u017F\s]*$/;
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
    if(text !== undefined && text !== '' && text !== null){
      if (!text_format.test(text)) {
        return 'El formato no es correcto, debe incluir 9 dígitos.';
      }
      if(text_format.test(text)){
        return 'valid';
      }
      }
    
    return 'valid';
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