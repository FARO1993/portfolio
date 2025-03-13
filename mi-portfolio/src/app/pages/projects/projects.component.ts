import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { title: 'Sistema de Gestión', description: 'Desarrollo de un sistema de gestión para clientes con Angular y Spring Boot.', icon: 'dashboard' },
    { title: 'E-commerce', description: 'Aplicación de compras online con integración de pagos y autenticación.', icon: 'shopping_cart' },
    { title: 'Chat en Tiempo Real', description: 'Aplicación de mensajería en tiempo real usando WebSockets.', icon: 'chat' }
  ];
}
