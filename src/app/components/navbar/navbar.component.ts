import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSubNavbarVisible = false; // Propiedad para controlar la visibilidad del segundo navbar

  showSubNavbar(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    this.isSubNavbarVisible = !this.isSubNavbarVisible; // Alternar la visibilidad del segundo navbar
  }
}
