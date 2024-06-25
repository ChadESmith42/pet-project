import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pets/:id', loadComponent: () => import('../components/pet/pet.component').then(c => c.PetComponent) },
  { path: 'pets', loadComponent: () => import('../components/pets/pets.component').then(c => c.PetsComponent) },
];
