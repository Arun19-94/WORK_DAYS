import { RouterReducerState } from '@ngrx/router-store';
import { userState, initialUserState } from './auth.state';
import { initialuserState, UserState, } from './user.state';

export interface IAppState {
    router?: RouterReducerState;
    user: UserState;
    auth: userState;
  }

export const initialAppState: IAppState = {
    user: initialuserState,
    auth: initialUserState
};

export function getInitialState(): IAppState {
    return initialAppState;
  }