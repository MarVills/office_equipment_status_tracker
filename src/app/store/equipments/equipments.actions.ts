import { createAction, props } from '@ngrx/store';

export const loadEquipmentss = createAction(
  '[Equipments] Load Equipmentss'
);

export const loadEquipmentssSuccess = createAction(
  '[Equipments] Load Equipmentss Success',
  props<{ data: any }>()
);

export const loadEquipmentssFailure = createAction(
  '[Equipments] Load Equipmentss Failure',
  props<{ error: any }>()
);
