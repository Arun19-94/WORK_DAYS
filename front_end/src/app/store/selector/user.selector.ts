import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { UserState } from '../state/user.state';

const selectUsers = (state: IAppState) => state.user;

export const selectSelectedUser = createSelector(
    selectUsers,
    (state: UserState) => state.selectedUser);