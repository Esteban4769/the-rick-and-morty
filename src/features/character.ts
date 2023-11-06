/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../api/character';
import { CharactersApiData } from '../types/CharactersApiData';
import { CharacterParams } from '../types/CharacterParams';

interface CharacterState {
  data: CharactersApiData | null,
  loading: boolean,
  error: string,
}

const initialState: CharacterState = {
  data: null,
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk('characters/fetch', (params: CharacterParams) => {
  return getCharacters(params);
});

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clear: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export default characterSlice.reducer;
export const { clear } = characterSlice.actions;
