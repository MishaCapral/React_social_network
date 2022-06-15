import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/store'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let newPostText = state.profilePage.newPostText;
  let posts = state.profilePage.posts;

  let addMessage = () =>{
    props.store.dispatch(addPostActionCreator());
   }

   let changeText = (text) => {
      props.store.dispatch(updateNewPostChangeActionCreator(text)); 
   }
    
  return  (<MyPosts updateNewPostText={changeText} addPost={addMessage} newPostText={newPostText} posts={posts} />)
}
export default MyPostsContainer;