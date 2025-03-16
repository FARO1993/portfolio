import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
