import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pop.component.html',
  styleUrl: './pop.component.css'
})

export class PopComponent {
  popVinils = [
    { id: 1, name: 'Michael Jackson - Dangerous', price: 79990, image: './assets/images/michaeljacksondangerous.jpg' },
    { id: 2, name: 'Dua Lipa - Future Nostalgia', price: 49990, image: './assets/images/dualipamoonlight.jpg' },
    { id: 3, name: 'Five - Invincible (Special Edition)', price: 29990, image: '././assets/images/fiveinvincible.jpg' },
    { id: 4, name: 'Britney Spears - Greatest Hits', price: 39990, image: 'assets/images/britneypregorative.jpg' },
   { id: 5, name: 'Prince - Purple Rain', price: 49990, image: 'assets/images/princerain.jpg' },
    { id: 6, name: 'Lana Del Rey - Born To Die', price: 29990, image: './assets/images/lanadelreyborntodie.jpg' },
    { id: 7, name: 'Britney Spears - Circus', price: 39990, image: './assets/images/Circus-_Album.png' },
    { id: 7, name: 'Skye Riley - New Brain Single', price: 39990, image: './assets/images/sky.jpg' }

  ];
}
