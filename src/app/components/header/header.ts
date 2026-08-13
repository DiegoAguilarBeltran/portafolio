import { Component } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio', active: true },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ];
}
