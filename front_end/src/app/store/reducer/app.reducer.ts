import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { userReducers } from './auth.reducer';
import { iuserReducers } from './user.reducer';
export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: iuserReducers,
  auth: userReducers
};