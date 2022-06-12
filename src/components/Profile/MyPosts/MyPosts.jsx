import React from 'react'
import { addPostActionCreator, updateNewPostChange, updateNewPostChangeActionCreator } from '../../../redux/state'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElement = props.posts.map( post => (<Post mileage={post.mileage} message={post.message} date={post.date}/>))

  let newPostText = props.state.profilePage.newPostText;
  let addMessage = () =>{
    props.dispatch(addPostActionCreator());
   }

   let changeText = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewPostChangeActionCreator(text)); 
   }
    
  return  <div>my posts
  <div>
    <div>
    <textarea placeholder='description...' onChange={changeText} value={newPostText}></textarea>
    </div>
    <button onClick={addMessage}>Add post</button>
  </div>
  {postsElement}
</div>
}
export default MyPosts;