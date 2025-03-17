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
  pathCv: string = "assets/cv/Facundo Rodriguez CV.pdf";

  isMenuOpen = false; // Estado del menú
  isScrolled = false; // Estado del scroll

  // Alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar el menú
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Escuchar el evento de scroll (modificado)
@HostListener('window:scroll', [])
onWindowScroll() {
  // Solo aplica el efecto "fixed-nav" en pantallas grandes
  if (window.innerWidth > 768) {
    const header = document.getElementById('header');
    if (header) {
      const headerBottom = header.offsetTop + header.offsetHeight;
      this.isScrolled = window.scrollY >= headerBottom;
    }
  }
}

  // Cerrar el menú al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
  const nav = document.querySelector('.nav-container');
  const hamburgerButton = document.querySelector('.hamburger-button');
  
  // Si el menú está abierto y el clic fue fuera del menú y del botón hamburguesa
  if (this.isMenuOpen && 
      !nav?.contains(event.target as Node) && 
      !hamburgerButton?.contains(event.target as Node)) {
    this.closeMenu();
  }
}
}