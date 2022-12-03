import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as equipment from '../equipments/equipments.reducer'
import * as category from '../categories/categories.reducer'
import * as activityLog from '../activity-log/activity-log.reducer'
import * as auth from '../auth/auth.reducer'
import { EquipmentsState } from '../state/equipments.state';
import { CategoriesState } from '../state/categories.state';
import { AuthState } from '../state/auth.state';
import { ActivityLogsState } from '../state/activity-log.state';

export const appFeatureKey = 'app';

export interface AppState {
  equipments: EquipmentsState, 
  categories: CategoriesState,
  activityLogs: ActivityLogsState,
  auth: AuthState
}

export const appReducers: ActionReducerMap<AppState> = {
  equipments: equipment.equipmentReducer, 
  categories: category.categoryReducer,
  activityLogs: activityLog.activityLogReducer,
  auth: auth.authReducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
