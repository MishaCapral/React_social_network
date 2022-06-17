import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   let newPostText = state.profilePage.newPostText;
//   let posts = state.profilePage.posts;

//   let addMessage = () =>{
//     props.store.dispatch(addPostActionCreator());
//    }

//    let changeText = (text) => {
//       props.store.dispatch(updateNewPostChangeActionCreator(text)); 
//    }
    
//   return  (<MyPosts updateNewPostText={changeText} addPost={addMessage} newPostText={newPostText} posts={posts} />)
// }
// export default MyPostsContainer;

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () =>{
      dispatch(addPostActionCreator());
     },
     updateNewPostText: (text) =>{
      dispatch(updateNewPostChangeActionCreator(text)); 
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;