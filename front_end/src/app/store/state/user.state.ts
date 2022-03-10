import { User } from '../../model/user.model';

export interface UserState {
  user: User[]| any;
  selectedUser:any;
}

export const initialuserState: UserState = {
  user: null,
  selectedUser: null
};
