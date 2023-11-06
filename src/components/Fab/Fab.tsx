import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { useLocation } from 'react-router-dom';
import style from './Fab.module.scss';
import openIcon from '../../img/more-vertical.svg';
import closeIcon from '../../img/v-icon.svg';
import historyIcon from '../../img/alert-circle.svg';
import downloadIcon from '../../img/download.svg';
import { useAppSelector } from '../../utils/hooks/reduxHooks';

interface Props {
  onHistoryClick: () => void;
}

export const Fab: React.FC<Props> = ({ onHistoryClick }) => {
  const location = useLocation();
  const isDetailsPage = location.pathname.slice(0, -1) === '/details/';

  const [isOpened, setIsOpened] = useState(false);
  const { data } = useAppSelector(state => state.characters);
  const handleToggle = () => {
    setIsOpened(open => !open);
  };

  return (
    <div className={style.container}>
      <div className={`${style.hidden_buttons_wrapper} ${isOpened ? style.open : ''}`}>

        <button
          type="button"
          onClick={onHistoryClick}
          className={`${style.icon_button} ${style.small_button}`}
        >
          <img
            src={historyIcon}
            alt="history icon"
            className={style.icon}
          />
        </button>

        <CSVLink data={data?.results || []}>
          <button
            disabled={isDetailsPage}
            type="button"
            className={`${style.icon_button} ${style.small_button}`}
          >
            <img
              src={downloadIcon}
              alt="download icon"
              className={style.icon}
            />
          </button>
        </CSVLink>

      </div>

      <button
        type="button"
        onClick={handleToggle}
        className={style.icon_button}
      >
        <img
          src={isOpened ? closeIcon : openIcon}
          alt={isOpened ? 'close icon' : 'open icon'}
          className={style.icon}
        />
      </button>
    </div>
  );
};
