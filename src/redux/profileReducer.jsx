const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

const profileReducer = (state, action) =>{
  
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