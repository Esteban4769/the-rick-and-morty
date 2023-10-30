import React from 'react';
import styles from './Footer.module.scss';
import image from '../../img/logo.png';
import bg from '../../img/logo_bg.png';
import { GithubIcon } from '../../Icons/GithubIcon';
import { SupportIcon } from '../../Icons/SupportIcon';
import { TwitterIcon } from '../../Icons/TwitterIcon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        performed as part of a test case
        <br />
        for the company
      </p>

      <div className={styles.image_wrapper}>
        <img
          src={bg}
          alt="Logo background"
          className={styles.logo_bg}
        />

        <img
          src={image}
          alt="Incode logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.social_links}>
        <GithubIcon />

        <SupportIcon />

        <TwitterIcon />
      </div>

      <p className={styles.year}>
        2023
      </p>
    </footer>
  );
};
