import { Component, Input, inject } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Observable, of } from 'rxjs';
import { Pet } from '../../models/pet';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
  ],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss',
})
export class PetComponent {
  private _petService: PetService = inject(PetService);
  private _router: Router = inject(Router);
  pet$: Observable<Pet> = of({
    id: 0,
    name: '',
    sex: '',
    breed: '',
    breedingStatus: '',
    birthday: '',
    color: [],
    weight: 0
  });
  @Input()
  set id(petId: number) {
    this.pet$ = this._petService.getPet(petId);
  }

  goToList(): void {
    this._router.navigate(['/pets']);
  }
}
