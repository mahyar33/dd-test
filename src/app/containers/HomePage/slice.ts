import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TomatoState } from './types';

export const initialState: TomatoState = {
  tomatoList: { loading: true, error: '', data: [] },
  energyList: { loading: true, error: '', data: [] },
};

const tomatoSlice = createSlice({
  name: 'tomato',
  initialState,
  reducers: {
    setEnergyList(state, action: PayloadAction<TomatoState['energyList']>) {
      const { payload } = action;
      state.energyList.loading = payload.loading;
      state.energyList.error = payload.error;
      state.energyList.data = payload.data;
    },
    setTomatoList(state, action: PayloadAction<TomatoState['tomatoList']>) {
      const { payload } = action;
      state.tomatoList.loading = payload.loading;
      state.tomatoList.error = payload.error;
      state.tomatoList.data = payload.data;
    },
    getEnergyList(state) {
      state.energyList.loading = true;
      state.energyList.error = '';
      state.energyList.data = [];
    },
    getTomatoList(state) {
      state.tomatoList.loading = true;
      state.tomatoList.error = '';
      state.tomatoList.data = [];
    },
  },
});

export const { actions, reducer, name: sliceKey } = tomatoSlice;
