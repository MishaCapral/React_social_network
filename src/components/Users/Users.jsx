import React from 'react'
import * as axios from 'axios'
import userAvatar from '../../Assets/Images/avatar.jpg'
import style from './Users.module.css'

class Users extends React.Component{
componentDidMount(){
  if(this.props.users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      this.props.setUsers(response.data.items)
    });
}
}
  // props.setUsers(
  //   [
  //     { id: 1, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Dmitry', status: 'I am big boy', location: { city: 'Zhytomyr', country: 'Ukraine' } },
  //     { id: 2, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Taras', status: 'I am big boy', location: { city: 'Kyiv', country: 'Ukraine' } },
  //     { id: 3, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Peter', status: 'I am big boy', location: { city: 'Lviv', country: 'Ukraine' } },
  //     { id: 4, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg', fullName: 'Oleg', status: 'I am big boy', location: { city: 'Rivne', country: 'Ukraine' } }
  //   ]
  // )


render(){
 return <div>
{this.props.users.map( u => <div key={u.id}> 
<div>
  <img className={style.avatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt='User avatar'/>
</div>
<div>
  {u.followed 
  ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
 
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
}

export default Users