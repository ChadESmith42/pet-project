import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

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
}
