import React from 'react'
//import { addPostActionCreator, updateNewPostChange, updateNewPostChangeActionCreator } from '../../../redux/store'
import {addPost, updateNewPostText} from "./MyPostsContainer"
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElement = props.posts.map( post => (<Post mileage={post.mileage} message={post.message} date={post.date}/>))

  let onNewPostText = props.newPostText;

  let onAddMessage = () =>{
    props.addPost() 
    //props.dispatch(addPostActionCreator());
   }

   let changeText = (e) => {
      let text = e.target.value;
        props.updateNewPostText(text)
     //props.dispatch(updateNewPostChangeActionCreator(text)); 
   }
    
  return  <div>my posts
  <div>
    <div>
    <textarea placeholder='description...' onChange={changeText} value={onNewPostText}></textarea>
    </div>
    <button onClick={onAddMessage}>Add post</button>
  </div>
  {postsElement}
</div>
}
export default MyPosts;