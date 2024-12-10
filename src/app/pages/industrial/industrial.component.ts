import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-industrial',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './industrial.component.html',
  styleUrl: './industrial.component.css'
})
export class IndustrialComponent {
  industrialVinyls = [
    { id: 1, name: 'Marilyn Manson - Antichrist Superstar', price: 49990, image: 'assets/images/antimanson.jpg' },
    { id: 2, name: 'Rob Zombie - Hellbilly Deluxe', price: 39990, image: 'assets/images/hellbilly.jpg' },
    { id: 3, name: 'In Strict Confidence - Holy', price: 45990, image: 'assets/images/holy.jpg' },
    { id: 4, name: 'Front Line Assembly - Millennium', price: 42990, image: 'assets/images/fla.jpeg' },
  ];
}
