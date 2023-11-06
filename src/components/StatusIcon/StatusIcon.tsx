import React from 'react';
import { CharacterStatus } from '../../types/CharacterStatus';
import style from './StatusIcon.module.scss';

interface Props {
  status: string;
}

export const StatusIcon: React.FC<Props> = ({ status }) => {
  let backgroundStyle = '';

  switch (status) {
    case CharacterStatus.Unknown: {
      backgroundStyle = `${style.grey}`;

      break;
    }

    case CharacterStatus.Alive: {
      backgroundStyle = `${style.green}`;

      break;
    }

    case CharacterStatus.Dead: {
      backgroundStyle = `${style.red}`;

      break;
    }

    default: throw new Error('wrong status');
  }

  return (
    <span className={`${style.container} ${backgroundStyle}`}>
    </span>
  );
};
