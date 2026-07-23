import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  headerAnchors = [
    "Inicio",
    "Habilidades",
    "Proyectos",
    "Experiencia",
    "Contacto"
  ];
  
  constructor() {
  }
}
