import style from './Post.module.css'

const Post = (props) => {
  return ( <div className={style.post}>
    <img src='https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg' alt='avatar' className={style.avatar}></img>
  <div className={style.message}>{props.message}</div>
  </div>
  )
}
export default Post;