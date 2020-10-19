import { delay, put, takeLatest } from 'redux-saga/effects';
import { EnergyList } from './types';
import { actions } from './slice';

const tomatoList: Array<string> = [
  'globe',
  'beefsteak',
  'oxheart',
  'plum',
  'pear',
  'cherry',
  'grape',
  'campari',
];
const energyList: Array<EnergyList> = [
  { type: 'header', text: 'energy', value: '74kJ (18 kcal)' },
  { text: 'carbohydrates', value: '3.9 g' },
  { type: 'child', text: 'sugars', value: '2.6 g' },
  { type: 'child', text: 'dietaryFiber', value: '1.2 g' },
  { text: 'fat', value: '0.2 g' },
  { text: 'protein', value: '0.9 g' },
  { text: 'water', value: '94.5 g' },
  { text: 'vitaminAEquiv', value: '42 μg (5%)' },
  { type: 'child', text: 'luteinAndZeaxanthin', value: '123 μg' },
  { text: 'vitaminC', value: '14 mg (17%)' },
  { text: 'vitaminE', value: '0.54 mg (4%)' },
  { text: 'potassium', value: '237 mg (5%)' },
];

export function* getTomatoList() {
  yield delay(3000);
  yield put(
    actions.setTomatoList({ loading: false, error: '', data: tomatoList }),
  );
  return;
}

export function* getEnergyList() {
  yield delay(3000);
  yield put(
    actions.setEnergyList({ loading: false, error: '', data: energyList }),
  );
  return;
}
/**
 * Root saga manages watcher lifecycle
 */
export function* tomatoSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.getTomatoList, getTomatoList);
  yield takeLatest(actions.getEnergyList, getEnergyList);
}
