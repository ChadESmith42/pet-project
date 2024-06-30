import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { PetForm } from '../models/pet-form';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this._http.get<Pet[]>('api/pet/');
  }

  getPet(id: number): Observable<Pet> {
    return this._http.get<Pet>(`api/pet/${id}`);
  }

  addPet(petForm: FormGroup<PetForm>): Observable<unknown> {
    const pet: Pet = {
      id: petForm.get('id')?.value || '',
      name: petForm.get('name')?.value || '',
      sex: petForm.get('sex')?.value || '',
      birthday: petForm.get('birthday')?.value || '',
      breed: petForm.get('breed')?.value || '',
      breedingStatus: petForm.get('breedingStatus')?.value || '',
      color: this.setColorValues((petForm.get('color') as FormArray<FormControl<string>>), []),
      weight: petForm.get('weight')?.value || 0,
    };
    return this._http.post<Pet>(`api/pet`, pet);
  }

  setColorValues(colorForm: FormArray<FormControl<string>>, colors: string[]): string[] {
    for(let color of colorForm.controls) {
      colors.push(color?.value || '');
    }
    return colors;
  }
}
