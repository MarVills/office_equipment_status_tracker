import { createAction, props } from '@ngrx/store';
import { Equipment, EquipmentDTO } from '../../Models/equipment.model';



export const requestFetchEquipmentsACTION = createAction(
  '[Equipments] Request Fetch Equipments',
   props<{payload: any[] }>(),
);
export const successFetchEquipmentsACTION = createAction(
 '[Equipments] Success Fetch Equipments',
  props<{payload: any[] }>(),

);

export const requestFetchEquipmentACTION = createAction(
  '[ Equipments ] Request Fetch Equipment',
  props<{payload: number }>()
);
export const successFetchEquipmentACTION = createAction(
  '[ Equipments ] Success Fetch Equipment',
  props<{payload: EquipmentDTO }>()
);

export const requestAddEquipmentACTION = createAction(
  '[ Equipments ] Request Add Equipment',
  props<{payload: Equipment}>()
);

export const successAddEquipmentACTION = createAction(
  '[ Equipments ] Success Add Equipment',
  // props<{payload: EquipmentDTO}>()
);

export const requestDeleteEquipmentACTION = createAction(
  '[ Equipments ] Request Delete Equipment',
  props<{payload: string}>()
);

export const successDeleteEquipmentACTION = createAction(
  '[ Equipments ] Success Delete Equipment',
);

export const requestUpdateEquipmentACTION = createAction(
  '[Equipments] Request Update Equipment',
  props<{ id: string, payload: Equipment }>()
);

export const successUpdateEquipmentACTION = createAction(
  '[ Equipments ] Success Update Equipment',
  // props<{payload: EquipmentDTO}>()
);

export const onEquipmentFailure = createAction(
  '[ Equipments ] Products Failure',
  props<{ error: any }>()
);

// export const loadEquipments = createAction(
//   '[Equipments] Load Equipmentss'
// );

// export const loadEquipmentsSuccess = createAction(
//   '[Equipments] Load Equipmentss Success',
//   props<{ data: any }>()
// );

// export const loadEquipmentsFailure = createAction(
//   '[Equipments] Load Equipmentss Failure',
//   props<{ error: any }>()
// );

