import React, { useEffect, useState } from 'react';
import { Drawer } from '@mui/material';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Fab } from './components/Fab';
import { History } from './components/History';
import { useAppDispatch, useAppSelector } from './utils/hooks/reduxHooks';
import * as historyAction from './features/history';

export const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data } = useAppSelector(state => state.history);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    setIsDrawerOpen(drawerState => !drawerState);
  };

  useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem('history') || '[]');

    dispatch(historyAction.set(historyData));

    return (() => {
      localStorage.setItem('history', JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <Header />

      <Main />

      <Fab onHistoryClick={toggleDrawer} />

      <Drawer
        PaperProps={{
          sx: {
            width: '420px',
            height: '572px',
            borderRadius: '9px 0 0 9px',
            marginTop: '25vh',
          },
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <History onClose={toggleDrawer} />
      </Drawer>

      <Footer />
    </div>
  );
};
