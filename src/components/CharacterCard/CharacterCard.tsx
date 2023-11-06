import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../types/Character';
import style from './CharacterCard.module.scss';
import { getIdFromUrl } from '../../utils/getIdFromUrl';
import { getEpisodeById } from '../../api/episode';
import { capitalize } from '../../utils/capitalize';
import { StatusIcon } from '../StatusIcon';

interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const {
    id,
    name,
    status,
    species,
    location,
    image,
    episode,
  } = character;

  const capitalizedStatus = capitalize(status);

  const [firstEpisode, setFirstEpisode] = useState('');

  const loadFirstEpisode = async () => {
    const episodeId = getIdFromUrl(episode[0]);

    const firstEpisodeFromApi = await getEpisodeById(episodeId);

    setFirstEpisode(firstEpisodeFromApi.name);
  };

  useEffect(() => {
    loadFirstEpisode();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.image_wrapper}>
        <img
          src={image}
          alt={name}
          className={style.image}
        />
      </div>

      <div className={style.info_wrapper}>
        <div className={style.info}>
          <h2 className={style.title}>
            <Link to={`/details/${id}`}>
              {name}
            </Link>
          </h2>

          <p className={style.status_text}>
            <StatusIcon status={capitalizedStatus} />
            {`${capitalizedStatus} - ${species}`}
          </p>
        </div>

        <div className={style.info}>
          <p className={style.text_gray}>
            Last known location:
          </p>

          <p className={style.text}>
            {location.name}
          </p>
        </div>

        <div className={style.info}>
          <p className={style.text_gray}>
            First seen in:
          </p>

          <p className={style.text}>
            {firstEpisode}
          </p>
        </div>
      </div>
    </div>
  );
};
