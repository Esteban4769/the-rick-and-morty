import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLinkIcon } from '../../Icons/HomeLinklcon';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <Link to="/">
          <HomeLinkIcon />
        </Link>
      </nav>
      <div className={style.header_background}>
        <h1 className={style.title}>
          The Rick and Morty API
        </h1>
      </div>
    </header>
  );
};
