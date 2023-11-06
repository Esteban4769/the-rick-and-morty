import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, CircularProgress } from '@mui/material';
import style from './HomePage.module.scss';
import { Filter } from '../../components/Filter';
import { CharacterList } from '../../components/CharacterList';
import { PagePagination } from '../../components/Pagination';
import { getNormalizedPage } from '../../utils/normilizePage';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import * as characterActions from '../../features/character';
import { buttonStyle } from '../../utils/buttonStyle';

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [isFiltering, setIsFiltering] = useState(false);
  const { characters, filters } = useAppSelector(state => state);
  const { data, loading, error } = characters;
  const { character: characterFilter } = filters;
  const dispatch = useAppDispatch();

  const itemsPerPage = 20;
  const pageCount = data ? Math.ceil(data.info.count / itemsPerPage) : 0;
  const currentPage = getNormalizedPage(searchParams, pageCount);

  const handleFilterToggle = (value: boolean) => {
    setIsFiltering(value);
  };

  const loadCharacters = async (page: number = currentPage) => {
    const appliedFilters = characterFilter || { };

    dispatch(characterActions.fetchData({ page, ...appliedFilters }));
  };

  useEffect(() => {
    loadCharacters();
  }, [searchParams]);

  useEffect(() => {
    loadCharacters(1);
  }, [characterFilter]);

  return (
    <div className={style.container}>

      {!data && !loading && error && (
        <div className={style.error}>
          Error on loading
        </div>
      )}

      {!data && loading && !error && (
        <Box sx={{ display: 'flex', margin: '50px' }}>
          <CircularProgress size="8rem" />
        </Box>
      )}

      {data && !loading && !error && (
        <div className={style.page_items_wrapper}>
          {isFiltering ? (
            <Filter onBgClick={handleFilterToggle} />
          ) : (
            <Button
              sx={buttonStyle}
              variant="outlined"
              onClick={() => handleFilterToggle(true)}
            >
              Filter
            </Button>
          )}

          <CharacterList characters={data.results} />

          <PagePagination pageCount={pageCount} currentPage={currentPage} />
        </div>
      )}
    </div>
  );
};
