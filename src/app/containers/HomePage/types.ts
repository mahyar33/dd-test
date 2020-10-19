export type EnergyList = {
  type?: 'header' | 'child';
  text: string;
  value: string;
};
export type EnergyObject = {
  loading: boolean;
  error: string;
  data: Array<EnergyList>;
};
export type TomatoObject = {
  loading: boolean;
  error: string;
  data: Array<string>;
};
export interface TomatoState {
  energyList: EnergyObject;
  tomatoList: TomatoObject;
}
