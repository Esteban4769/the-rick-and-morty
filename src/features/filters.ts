/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterParams } from '../types/CharacterParams';

interface CharacterState {
  character: CharacterParams | null,
}

const initialState: CharacterState = {
  character: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CharacterParams>) => {
      state.character = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { set } = filtersSlice.actions;
