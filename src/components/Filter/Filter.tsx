/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Button } from '@mui/material';
import style from './Filter.module.scss';
import { buttonStyle } from '../../utils/buttonStyle';
import { FilterForm } from '../FilterForm';

interface Props {
  onBgClick: (value: boolean) => void;
}

export const Filter: React.FC<Props> = ({ onBgClick }) => {
  return (
    <section className={style.container}>
      <div onClick={() => onBgClick(false)} className={style.filter_overlay}>
      </div>

      <Button
        sx={buttonStyle}
        variant="outlined"
        onClick={() => onBgClick(false)}
      >
        Remove Filter
      </Button>

      <FilterForm />
    </section>
  );
};
