import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pets', loadComponent: () => import('../components/pets/pets.component').then(c => c.PetsComponent) },
];
