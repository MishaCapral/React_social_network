const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hello,world!', mileage: 1000, date: 2020 },
    { id: 2, message: 'Change oil in gear', mileage: 15000, date: 2021 },
    { id: 3, message: 'Install new car radio Blapunkt', mileage: 16500, date: 2022 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    let text = state.newPostText;
    let newPost = {
      id: state.posts.id + 1,
      message: text,
      mileage: 'Unknown',
      date: 'Unknown',
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: ''

    }

  } else if (action.type === UPDATE_NEW_POST_CHANGE) {
    /*let stateCopy = {...state};
    stateCopy.newPostText = action.changeText;
    return stateCopy;*/
    return {
      ...state,
      newPostText: action.changeText
    }
  }
  else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile
    }
  }

  return state
}

/* Action creator*/
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_CHANGE, changeText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;