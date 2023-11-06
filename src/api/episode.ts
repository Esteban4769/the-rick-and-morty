import { Episode } from '../types/Episode';
import { client } from './client';

export const getEpisodeById = async (id: number): Promise<Episode> => {
  return (await client.get(`episode/${id}`)).data;
};
