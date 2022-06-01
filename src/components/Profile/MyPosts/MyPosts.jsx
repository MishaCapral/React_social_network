import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return  <div>my posts

  <div>
  <textarea></textarea>
  <button>Add post</button>
  </div>

    <Post message='Hello, world!!!'/>
    <Post message='This is first step in react'/>
    <Post message='Abracadabra'/>
</div>
}
export default MyPosts;