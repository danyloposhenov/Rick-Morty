import { ICharacterInfo } from "./character-info.interface";

export interface ISearchInfo {
  info?: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  },
  results: ICharacterInfo[];
}
