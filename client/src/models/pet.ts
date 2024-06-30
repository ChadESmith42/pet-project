export interface Pet {
  id: string,
  name: string,
  sex: string,
  birthday: Date | string,
  breed: string,
  breedingStatus: string,
  color: string[],
  weight: number,
}
