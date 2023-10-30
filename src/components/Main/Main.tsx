import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { DetailsPage } from '../../pages/DetailsPage';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/details" element={<DetailsPage />} />
        <Route />
      </Routes>
    </main>
  );
};
