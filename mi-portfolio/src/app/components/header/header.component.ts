import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatIcon,
    RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  backgroundImage: string = "assets/foto-personal.jpeg";
  pathCv: string = "assets/cv/Facundo Rodriguez CV.pdf"

  isMenuOpen = false; // Estado del menú
  isScrolled = false;

  // Alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar el menú
  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (header) {
      const headerBottom = header.offsetTop + header.offsetHeight;
      this.isScrolled = window.scrollY >= headerBottom;
    }
  }

}
