import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  // Guardar el token de autenticación
  login(token: string): void {
    this.localStorageService.setItem('authToken', token);
  }

  // Eliminar el token y redirigir al login
  logout(): void {
    this.localStorageService.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): Observable<boolean> {
    const token = this.localStorageService.getItem('authToken');
    return of(!!token); // Devuelve true si el token existe, false si no
  }
}
