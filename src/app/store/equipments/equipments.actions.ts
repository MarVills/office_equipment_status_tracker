import { createAction, props } from '@ngrx/store';
import { Equipment, EquipmentDTO } from '../state/equipments.state';



export const requestFetchProductsACTION = createAction(
  '[Products] Request Fetch Equipments',
  props<{ page: number }>()
);
export const successFetchProductsACTION = createAction(
 '[Products] Success Fetch Equipments',
  props<{payload: EquipmentDTO[] }>(),

);

export const requestFetchProductACTION = createAction(
  '[ Products ] Request Fetch Equipment',
  props<{payload: number }>()
);
export const successFetchProductACTION = createAction(
  '[ Products ] Success Fetch Equipment',
  props<{payload: EquipmentDTO }>()
);

export const requestAddProductACTION = createAction(
  '[ Products ] Request Add Equipment',
  props<{payload: Equipment}>()
);

export const successAddProductACTION = createAction(
  '[ Products ] Success Add Equipment',
  props<{payload: EquipmentDTO}>()
);

export const requestDeleteProductACTION = createAction(
  '[ Products ] Request Delete Equipment',
  props<{payload: number}>()
);

export const successDeleteProductACTION = createAction(
  '[ Products ] Success Delete Equipment',
);

export const requestUpdateProductACTION = createAction(
  '[Products] Request Update Equipment',
  props<{ id: any, payload: any }>()
);

export const successUpdateProductACTION = createAction(
  '[ Products ] Success Update Equipment',
  props<{payload: EquipmentDTO}>()
);

export const onProductFailure = createAction(
  '[ Products ] Products Failure',
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

