import type { UserState } from './types';
import type { UserAction } from './actions';
import { LOGIN, LOGOUT } from './actions';

const initialState: UserState = {
  isLoggedIn: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
