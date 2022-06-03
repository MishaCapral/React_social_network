import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

// data
// let posts = [
//   {id:1,message:'Hello,world!',mileage:1000,date:2020},
//   {id:2,message:'Change oil in gear',mileage:15000,date: 2021},
//   {id:3,message:'Install new car radio Blapunkt',mileage:16500, date: 2022},
// ]

const MyPosts = (props) => {
  let postsElement = props.posts.map( post => (<Post mileage={post.mileage} message={post.message} date={post.date}/>))

  let newPostElement = React.createRef();
  let addMessage = () =>{
    let textMessage = newPostElement.current.value;
    props.addPost(textMessage); 
   }
    
  return  <div>my posts
  <div>
    <textarea ref={newPostElement}></textarea>
    <button onClick={addMessage}>Add post</button>
  </div>
  {postsElement}
</div>
}
export default MyPosts;