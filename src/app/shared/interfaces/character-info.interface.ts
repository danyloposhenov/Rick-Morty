import { ICharacterLocation } from "./character-location.interface";
import { ICharacter } from "./character.interface";

export interface ICharacterInfo extends ICharacter {
  status: 'Dead' | 'Alive' | 'unknown',
  species: string,
  type: string,
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
  origin: ICharacterLocation,
  location: ICharacterLocation,
  image: string,
  episode: string[],
}
