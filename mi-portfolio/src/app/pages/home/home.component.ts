import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from "../../components/header/header.component";
import { SkillsComponent } from '../skills/skills.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule, 
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ExperienciaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
