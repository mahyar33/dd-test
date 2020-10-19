import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.tomato || initialState;

export const selectEnergyList = createSelector(
  [selectDomain],
  tomatoState => tomatoState.energyList,
);

export const selectTomatoList = createSelector(
  [selectDomain],
  tomatoState => tomatoState.tomatoList,
);
