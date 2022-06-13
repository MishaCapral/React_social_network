const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

let initialState = {
  posts: [
    { id: 1, message: 'Hello,world!', mileage: 1000, date: 2020 },
    { id: 2, message: 'Change oil in gear', mileage: 15000, date: 2021 },
    { id: 3, message: 'Install new car radio Blapunkt', mileage: 16500, date: 2022 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) =>{
  
    if (action.type === ADD_POST){
    let text = state.newPostText
      let newPost = {
        id: state.posts.id + 1,
        message: text,
        mileage: 'Unknown',
        date: 'Unknown',
      };
      state.posts.push(newPost);
      state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_CHANGE) {
      state.newPostText = action.changeText;
    } 
    
  return state
}

export default profileReducer;