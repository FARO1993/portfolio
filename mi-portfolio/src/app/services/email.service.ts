// email.service.ts
import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = 'service_kfxb57d'; // Reemplaza con tu Service ID de EmailJS
  private templateID = 'template_ta8wsew'; // Reemplaza con tu Template ID de EmailJS
  private userID = 'qpwiIjjmJOvOw5x_n'; // Reemplaza con tu User ID de EmailJS

  constructor() {
    emailjs.init(this.userID); // Inicializa EmailJS con tu User ID
  }

  sendEmail(formData: any) {//#endregion
    debugger
    const templateParams = {
      to_email: 'facundo.m.rodriguez1993@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    return emailjs.send(this.serviceID, this.templateID, templateParams);
  }
}