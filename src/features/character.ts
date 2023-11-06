/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCharacters } from '../api/character';
import { CharactersApiData } from '../types/CharactersApiData';
import { Character } from '../types/Character';
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
    add: (state, action: PayloadAction<Character>) => {
      state.data?.results.push(action.payload);
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
export const { add } = characterSlice.actions;
