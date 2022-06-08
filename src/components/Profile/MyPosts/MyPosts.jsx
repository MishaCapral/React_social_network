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
    props.addPost();
    props.updateNewPostChange('');
   }

   let changeText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text); 
   }
    
  return  <div>my posts
  <div>
    <textarea onChange={changeText} ref={newPostElement} />
    <button onClick={addMessage}>Add post</button>
  </div>
  {postsElement}
</div>
}
export default MyPosts;