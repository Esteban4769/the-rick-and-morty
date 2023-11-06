import React from 'react';
import { Character } from '../../types/Character';
import { CharacterCard } from '../CharacterCard';
import style from './CharacterList.module.scss';

interface Props {
  characters: Character[];
}

export const CharacterList: React.FC<Props> = ({ characters }) => {
  return (
    <section className={style.container}>
      {characters.map(character => {
        return (
          <CharacterCard key={character.id} character={character} />
        );
      })}
    </section>
  );
};
