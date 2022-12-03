import { createReducer, on } from '@ngrx/store';
import { EquipmentsState } from '../state/equipments.state';
import * as equipmentsAction from './equipments.actions';


export const equipmentsFeatureKey = 'equipments';

export const initialState: EquipmentsState = {
  equipments: [],
};

export const equipmentReducer = createReducer(
  initialState,

  on(equipmentsAction.successFetchEquipmentsACTION, (state: EquipmentsState, { payload }) =>{
    return { 
      ...state, 
      equipments: payload }
  }),

  on(equipmentsAction.successAddEquipmentACTION, (state: EquipmentsState) =>{
    return { ...state, state }
  }),

  on(equipmentsAction.requestUpdateEquipmentACTION, (state: EquipmentsState, { payload }) =>{
    const updateItem = [state.equipments].map((equipment:any)=> {
      return payload === equipment.id ? payload : equipment;
    })
    const returnState = { ...state, equipments: updateItem}
    return returnState;
  }),

  on(equipmentsAction.requestDeleteEquipmentACTION, (state: EquipmentsState, { payload }) =>{
    let newState = [state.equipments];
    newState.splice(newState.indexOf(payload), 1);
    const returnState = { ...state, equipments: newState }
    return returnState;
  }),
);




