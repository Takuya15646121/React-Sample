export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

export const actionCreator = {
  authSuccess: (user) => {
    return { type: AUTH_SUCCESS, user: user }
  },
  authFailure: () => {
    return { type: AUTH_FAILURE, user: null }
  }
}