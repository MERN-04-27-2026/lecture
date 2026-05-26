export const LOGIN = 'user/login';
export const LOGOUT = 'user/logout';

export const login = () => ({
  type: LOGIN as typeof LOGIN,
});

export const logout = () => ({
  type: LOGOUT as typeof LOGOUT,
});

export type UserAction = ReturnType<typeof login> | ReturnType<typeof logout>;
