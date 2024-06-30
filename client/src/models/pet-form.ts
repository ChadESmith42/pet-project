import { FormArray, FormControl } from "@angular/forms";

export interface PetForm {
  id: FormControl<string | undefined>,
  name: FormControl<string | undefined>,
  sex: FormControl<string | undefined>,
  birthday: FormControl<Date | string | undefined>,
  breedingStatus: FormControl<string | undefined>,
  color: FormArray<FormControl<string>>,
  weight: FormControl<number | undefined>,
}
