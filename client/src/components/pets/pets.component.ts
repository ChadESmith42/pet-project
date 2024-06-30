import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Observable, map } from 'rxjs';
import { Pet } from '../../models/pet';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {
  private _petService: PetService = inject(PetService);
  private _router: Router = inject(Router);
  pets$: Observable<Pet[]> = this._petService.getPets();

  goToPet(id: string): void {
    this._router.navigate([`/pets/${id}`]);
  }
}
