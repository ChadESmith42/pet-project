import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PetForm } from '../../models/pet-form';
import nodemon from 'nodemon';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.scss'
})
export class PetFormComponent implements OnInit {
  private _fb: FormBuilder = inject(FormBuilder);
  private _petService: PetService = inject(PetService);
  petForm!: FormGroup<PetForm>;

  get colors(): FormArray<FormControl<string>> {
    return this.petForm.get('color') as FormArray<FormControl<string>>;
  }

  ngOnInit(): void {
    this.petForm = this.setForm();
  }

  setForm(): FormGroup<PetForm> {
    return this._fb.group<PetForm>({
      id: this._fb.control<string | undefined>(undefined, { nonNullable: true }),
      name: this._fb.control<string | undefined>(undefined, { nonNullable: true }),
      sex: this._fb.control<string | undefined>(undefined, { nonNullable: true }),
      birthday: this._fb.control<Date | string | undefined>(undefined, { nonNullable: true }),
      breedingStatus: this._fb.control<string | undefined>(undefined, { nonNullable: true }),
      color: this._fb.array<FormControl<string>>([]),
      weight: this._fb.control<number | undefined>(undefined, { nonNullable: true }),
    })
  }

  addColor(): void {
    this.colors.push(this._fb.control<string>('', { nonNullable: true }));
  }

  removeColor(index: number): void {
    this.colors.removeAt(index);
  }

  submitPet(): void {
    this.petForm.markAllAsTouched();
    if (this.petForm.valid) {
      this._petService.addPet(this.petForm);
    }
  }
}
