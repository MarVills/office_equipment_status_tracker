import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Equipments, EquipmentsState } from '../state/equipments.state';

export const selectEquipmentsFeatureState =
  createFeatureSelector<any>('equipments');
export const selectEquipment = createSelector(
  selectEquipmentsFeatureState,
  (state: EquipmentsState) => state.equipments
);
