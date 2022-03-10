import { EUserActions } from '../action/user.action';
import { UserActions } from '../action/user.action';
import { initialuserState, UserState } from '../state/user.state';

export const iuserReducers = (
  state = initialuserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    // case EUserActions.GetUserSuccess: {
    //   return {
    //     ...state,
    //     selectedUser: action.payload
    //   };
    // }

    

    default:
      return state;
  }
};
