const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  users: [
    // { id: 1, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Dmitry', status: 'I am big boy', location: { city: 'Zhytomyr', country: 'Ukraine' } },
    // { id: 2, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Taras', status: 'I am big boy', location: { city: 'Kyiv', country: 'Ukraine' } },
    // { id: 3, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Peter', status: 'I am big boy', location: { city: 'Lviv', country: 'Ukraine' } },
    // { id: 4, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Oleg', status: 'I am big boy', location: { city: 'Rivne', country: 'Ukraine' } },
  ],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 0,
  isFeatching: false,
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

  } else if (action.type === SET_CURRENT_PAGE) {
    return { ...state, currentPage: action.page }

  } else if (action.type === SET_USERS_TOTAL_COUNT) {
    return { ...state, totalUsersCount: action.totalUsersCount }

  } else if (action.type === TOGGLE_IS_FETCHING) {
    return { ...state, isFeatching: action.isFeatching }
  }

  return state
}
/*  Action Creator  */
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount })
export const setIsFetching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })

export default usersReducer;