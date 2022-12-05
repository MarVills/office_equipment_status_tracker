import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserDetailState } from '../state/user-details.state';


export const selectUserDetailsFeatureKey = createFeatureSelector<any>('equipments');
export const selectUserDetail = createSelector(
    selectUserDetailsFeatureKey,
    (state: UserDetailState) => state.details
)