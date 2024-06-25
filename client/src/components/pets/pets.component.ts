import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Observable, map } from 'rxjs';
import { Pet } from '../../models/pet';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {
  private _petService: PetService = inject(PetService);
  pets$: Observable<Pet[]> = this._petService.getPets();
}
