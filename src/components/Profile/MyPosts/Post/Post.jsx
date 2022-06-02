import style from './Post.module.css'

const Post = (props) => {
  return ( <div className={style.post}>
    <div className={style.odometr}>
      <div className={style.mileage}>{props.mileage + ' km'}</div>
      <div className={style.date}>{props.date}</div>
    </div>
    <div className={style.infoBlock}>
      <div className={style.point}></div>
      <div className={style.message}>{props.message}</div>
    </div>
  </div>
  )
}
export default Post;