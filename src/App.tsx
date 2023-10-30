import React from 'react';
import './App.scss';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Header />

      <Main />

      <Footer />
    </div>
  );
};
