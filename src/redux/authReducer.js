const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  //isFeatching: false,
};

const authReducer = (state = initialState, action) => {

  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.data,
      isAuth: true,
    }
  }
  return state
}
/*  Action Creator  */
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export default authReducer;