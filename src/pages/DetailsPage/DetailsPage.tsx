import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './DetailsPage.module.scss';
import { Character } from '../../types/Character';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { StatusIcon } from '../../components/StatusIcon';
import { capitalize } from '../../utils/capitalize';
import { Episode } from '../../types/Episode';
import { getIdFromUrl } from '../../utils/getIdFromUrl';
import { getEpisodeById } from '../../api/episode';

export const DetailsPage = () => {
  const { data: charactersData } = useAppSelector(state => state.characters);
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const { id } = useParams();

  const capitalizedStatus = capitalize(character?.status || '');

  const loadEpisodes = async () => {
    if (character) {
      const episodePromises = character.episode.map(async (episodeUrl) => {
        const episodeId = getIdFromUrl(episodeUrl);

        return getEpisodeById(episodeId);
      });

      const episodesFromApi = await Promise.all(episodePromises);

      setEpisodes(episodesFromApi);
    }
  };

  useEffect(() => {
    if (charactersData && id) {
      setCharacter(charactersData.results.find(char => +id === char.id) || null);
    }
  }, []);

  useEffect(() => {
    loadEpisodes();
  }, [character]);

  return (
    <div className={style.container}>
      {character && (
        <>
          <div className={style.image_wrapper}>
            <img
              src={character.image}
              alt={character.name}
              className={style.image}
            />
          </div>
          <div className={style.info_wrapper}>
            <div className={style.info}>
              <h2 className={style.title}>
                {character.name}
              </h2>

              <p className={style.status_text}>
                <StatusIcon status={capitalizedStatus} />
                {`${capitalizedStatus} - ${character.species}`}
              </p>
            </div>

            <div className={style.info}>
              <p className={style.text_gray}>
                Last known location:
              </p>

              <p className={style.text}>
                {character.location.name}
              </p>
            </div>

            {!!episodes.length && (
              <>
                <div className={style.info}>
                  <p className={style.text_gray}>
                    First apperence in:
                  </p>

                  <p className={style.text}>
                    {!!episodes.length && episodes[0].episode}
                  </p>
                </div>

                <div className={style.info}>
                  <p className={style.text_gray}>
                    Appeared in episodes:
                  </p>

                  <p className={style.text}>
                    {episodes.map(({ name }) => name).join(', ')}
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
