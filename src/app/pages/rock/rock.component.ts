import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rock',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rock.component.html',
  styleUrl: './rock.component.css'
})

export class RockComponent{
  rockVinils = [
    { id: 1, name: 'Motley Crue - Shout At The Devil', price: 39990, image: 'assets/images/motleycrueshoutatthedevil.jpg' },
    { id: 2, name: 'Limp Bizkit - Significant Other', price: 39990, image: 'assets/images/limpbizkitsignificantother.jpg' },
    { id: 3, name: 'Linkin Park - Hibrid Theory', price: 29990, image: 'assets/images/linkinparkhibridtheory.jpg' },
    { id: 4, name: 'Linkin Park - Reanimation', price: 29990, image: 'assets/images/linkinparkreanimation.jpg' },
    { id: 5, name: 'Misfits - Famous Monsters', price: 45590, image: 'assets/images/misfitsmonster.jpg' },
    { id: 6, name: 'Queen - A Kind Of Magic', price: 59990, image: 'assets/images/queenmagic.png' },
  ];
  
}
