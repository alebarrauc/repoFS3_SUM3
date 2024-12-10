import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ost',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ost.component.html',
  styleUrl: './ost.component.css'
})
export class OstComponent {
  ostVinyls = [
    { id: 1, name: 'Tom Tykwer - Cloud Atlas', price: 49990, image: 'assets/images/cloud.jpg' },
    { id: 2, name: 'Steve Jablonsky - Transformers', price: 39990, image: 'assets/images/transformers.jpg' },
    { id: 3, name: 'Yoko Kanno - Cowboy Bebop', price: 45990, image: 'assets/images/cowbobebop.jpeg' },
  ];
}
