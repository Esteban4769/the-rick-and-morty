import { CharacterParams } from '../types/CharacterParams';
import { getParamsString } from '../utils/gerParamsString';
import { client } from './client';

export const getCharacters = async (params: CharacterParams) => {
  const paramsString = getParamsString(params);

  return client.get(`character${paramsString}`);
};

export const getCharacterById = async (id: number) => {
  return client.get(`character${id}`);
};
