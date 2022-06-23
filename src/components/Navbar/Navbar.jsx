import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = ()=> {
  return <nav className={`${style.nav} borderShadow`}> 
<div className={style.item}>
  <NavLink to='/profile' style ={({ isActive}) => ({color: isActive ? 'var(--mainBlue)' : 'black'})}>Profile</NavLink>
  </div>
<div className={style.item}>
  <NavLink to='/users' style ={({ isActive}) => ({color: isActive ? 'var(--mainBlue)' : 'black'})}>Users</NavLink>
  </div>
<div className={style.item}>
  <NavLink to='/dialogs' style ={({ isActive}) => ({color: isActive ? 'var(--mainBlue)' : 'black'})}>Messages</NavLink>
  </div>
<div className={style.item}>
  <NavLink to='/news' style ={({ isActive}) => ({color: isActive ? 'var(--mainBlue)' : 'black'})}>News</NavLink>
  </div>

{/* <div className={style.item}><a href='#'>Music</a></div> */}

<div className={style.item}>
  <NavLink to='/settings' style ={({ isActive}) => ({color: isActive ? 'var(--mainBlue)' : 'black'})}>Settings</NavLink>
  </div>
</nav>
}

export default Navbar 