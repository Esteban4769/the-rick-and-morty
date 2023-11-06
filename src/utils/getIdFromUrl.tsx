export const getIdFromUrl = (url: string): number => {
  return Number(url.split('/').pop()) || -1;
};
