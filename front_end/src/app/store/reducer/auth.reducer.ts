import { EUserActions } from '../action/auth.action';
import {  UserActions} from '../action/auth.action';
import { userState, initialUserState } from '../state/auth.state'; 

export const userReducers = (
  state = initialUserState,
  action: UserActions
): userState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }

    default:
      return state;
  }
};
