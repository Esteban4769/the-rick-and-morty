import { Character } from './Character';

export interface CharactersApiData {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string;
  };
  results: Character[];
}
