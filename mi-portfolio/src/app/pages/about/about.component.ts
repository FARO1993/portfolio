import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { aboutMeText } from '../../shared/constants/about-me';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  edad: number = 31;
  email: string = "facundo.m.rodriguez1993@gmail.com";
  telefono: string = "1131203845";
  ubicacion: string = "Villa Urquiza, CABA";
  idiomas: string = "españl (nativo), inglés";
  about: string = aboutMeText;


}
