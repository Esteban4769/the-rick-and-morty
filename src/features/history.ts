/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterParams } from '../types/CharacterParams';

interface HistoryState {
  data: (CharacterParams | string)[],
}

const initialState: HistoryState = {
  data: [],
};

const filtersSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CharacterParams | string>) => {
      state.data.push(action.payload);
    },
    clear: (state) => {
      state.data = [];
    },
  },
});

export default filtersSlice.reducer;
export const { add, clear } = filtersSlice.actions;
