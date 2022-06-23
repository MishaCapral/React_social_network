const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // { id: 1, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Dmitry', status: 'I am big boy', location: { city: 'Zhytomyr', country: 'Ukraine' } },
    // { id: 2, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Taras', status: 'I am big boy', location: { city: 'Kyiv', country: 'Ukraine' } },
    // { id: 3, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Peter', status: 'I am big boy', location: { city: 'Lviv', country: 'Ukraine' } },
    // { id: 4, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Oleg', status: 'I am big boy', location: { city: 'Rivne', country: 'Ukraine' } },
  ],
};

const usersReducer = (state = initialState, action) => {

  if (action.type === FOLLOW) {

    let stateCopy = {
      ...state,
      users: [...state.users]
    }
    stateCopy.users.map(u => {
      if (u.id === action.userId) {
        return u.followed = true
      }
      return u
    })
    return stateCopy

  } else if (action.type === UNFOLLOW) {

    let stateCopy = {
      ...state,
      users: [...state.users]
    }
    stateCopy.users.map(u => {
      if (u.id === action.userId) {
        return u.followed = false
      }
      return u
    })
    return stateCopy

  } else if (action.type === SET_USERS) {
    return { ...state, users: [...action.users] }

  }

  return state
}
/*  Action Creator  */
export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;