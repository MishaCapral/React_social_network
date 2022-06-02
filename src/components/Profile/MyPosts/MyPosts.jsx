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
  return  <div>my posts

  <div>
  <textarea></textarea>
  <button>Add post</button>
  </div>
  {postsElement}
</div>
}
export default MyPosts;