import { User } from "src/app/model/user.model";

export interface userState {
    user: User
}

export const initialUserState: userState = {
    user: {
        _id: "",
        name: "",
        email: "",
        role: "",
        current_role: "",
        photoUrl: "",
    }
  };