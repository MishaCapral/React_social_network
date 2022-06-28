import { NavLink } from 'react-router-dom';
import userAvatar from '../../Assets/Images/avatar.jpg'
import style from './Users.module.css'

let Users = (props) => {
     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
     let pages = [];
      for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
        if(i === 10) break
      }

 return <div className='wrapper'>
<div> {pages.map( p => {
  return <span className={props.currentPage === p ? style.selectedPage :''} onClick={() => props.onPageChanged(p) }>{p}</span>})}

</div>

{props.users.map( u => <div key={u.id}> 
<div>
  <NavLink to={'/profile/' + u.id}>
  <img className={style.avatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt='User avatar'/>
  </NavLink>
</div>
<div>
  {u.followed 
  ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
 
</div>

<div className="userInfo">

  <div>
<div>{u.name}</div>
<div>{u.status}</div>
</div>

<div>
  <div>{'u.location.country'}</div>
  <div>{'u.location.city'}</div>
</div>

</div>
</div>)}

 </div>

}

export default Users