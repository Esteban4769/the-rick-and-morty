/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import style from './History.module.scss';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { capitalize } from '../../utils/capitalize';

interface Props {
  onClose: () => void;
}

export const History: React.FC<Props> = ({ onClose }) => {
  const { data } = useAppSelector(state => state.history);
  const [itemId] = useState(data.length - 1);

  const isItemString = typeof data[itemId] !== 'string';

  return (
    <div className={style.container}>
      <div className={style.info_wrapper}>
        <h2>
          History
        </h2>

        {data.length === 0 ? (
          <p className={style.text}>
            Currently empty
          </p>
        ) : isItemString ? (
          <>
            <h3 className={style.text_gray}>
              Filtered character by:
            </h3>

            {Object.entries(data[itemId]).map(([key, value]) => {
              const capitalizedKey = capitalize(key);

              return (
                <p key={key} className={style.text}>
                  {`${capitalizedKey}: ${value}`}
                </p>
              );
            })}

          </>
        ) : (
          <>
            <p className={style.text_gray}>
              Checked character details of
            </p>

            <p className={style.text}>
              {data[itemId]}
            </p>
          </>
        )}

      </div>

      <Button
        className={style.button}
        variant="text"
        onClick={onClose}
      >
        Close
      </Button>
    </div>
  );
};
