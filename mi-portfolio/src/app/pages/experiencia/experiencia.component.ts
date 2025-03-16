import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { adcSrl, analistaDesarrolladorSoftware, desarrolladorBackend, desarrolladorFullstack, detailAdc, detailMegatone, detailNovatium, electronicaMegatoneSA, novatium } from '../../shared/constants/about-me';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [ // Se activa cuando el elemento entra en el DOM
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [ // Se activa cuando el elemento sale del DOM
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class ExperienciaComponent implements AfterViewInit{

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  //Experiencia Novatium (BNA)
  desarrolladorBackend = desarrolladorBackend;
  empresaNovatium = novatium;
  periodoNovatium = "Agosto 2024 - PRESENTE";
  detalleNovatium = detailNovatium;

  //Experiencia Musimundo (Electronica Megatone)
  analistaDesarrolladorDeSoftware = analistaDesarrolladorSoftware;
  empresaMegatone = electronicaMegatoneSA;
  periodoMegatone = "Septiembre 2022 - Agosto 2024";
  detalleMegatone = detailMegatone;

  //Experiencia ArtDeCode (BBVA)
  desarrolladorFullStack = desarrolladorFullstack;
  empresaADC = adcSrl;
  periodoADC = "Septiembre 2021 - Septiembre 2022";
  detalleADC = detailAdc;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  checkScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const cards = this.el.nativeElement.querySelectorAll('.experience-card');
    const windowHeight = window.innerHeight;

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();

      if (rect.top < windowHeight - 50 && rect.bottom > 50) {
        card.classList.add('visible');  // Aparece cuando entra en vista
      } else {
        card.classList.remove('visible'); // Desaparece cuando sale de vista
      }
    });
  }

}
