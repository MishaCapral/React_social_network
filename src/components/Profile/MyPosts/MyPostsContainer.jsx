import React from 'react'
import { addPostActionCreator, updateNewPostChange, updateNewPostChangeActionCreator } from '../../../redux/store'
import MyPosts from './MyPosts'
//import Post from './Post/Post'

const MyPostsContainer = (props) => {

  let newPostText = props.state.profilePage.newPostText;

  let addMessage = () =>{
    props.dispatch(addPostActionCreator());
   }

   let changeText = (text) => {
      props.dispatch(updateNewPostChangeActionCreator(text)); 
   }
    
  return  (<MyPosts updateNewPostText={changeText} addPost={addMessage} newPostText={newPostText} posts={props.posts} />)
}
export default MyPostsContainer;