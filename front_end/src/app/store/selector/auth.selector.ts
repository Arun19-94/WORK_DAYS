import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { userState } from '../state/auth.state';

const selectUsers = (state: IAppState) => state.user;

export const selectSelectedUser = createSelector(
    selectUsers,
    (state: userState) => state.user);