import { CharacterParams } from '../types/CharacterParams';
import { EpisodeParams } from '../types/EpisodeParams';
import { LocationParams } from '../types/LocationParams';

export const getParamsString = (params: EpisodeParams | CharacterParams | LocationParams) => {
  let paramsString = '';

  Object.entries(params).forEach(([key, value], index, entries) => {
    if (index === 0) {
      paramsString += '?';
    }

    paramsString += `${key}=${value}`;

    if (index !== entries.length) {
      paramsString += '&';
    }
  });

  return paramsString;
};
