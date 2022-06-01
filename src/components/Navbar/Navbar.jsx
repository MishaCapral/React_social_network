import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = ()=> {
  return <nav className={`${style.nav} borderShadow`}> 
<div className={style.item}>
  <NavLink to='/profile' style ={({ isActive}) => ({color: isActive ? 'rgb(58 163 207)' : 'black'})}>Profile</NavLink>
  </div>
<div className={style.item}>
  <NavLink to='/dialogs' style ={({ isActive}) => ({color: isActive ? 'rgb(58 163 207)' : 'black'})}>Messages</NavLink>
  </div>
<div className={style.item}>
  <NavLink to='/news' style ={({ isActive}) => ({color: isActive ? 'rgb(58 163 207)' : 'black'})}>News</NavLink>
  </div>

<div className={style.item}><a href='#'>Music</a></div>

<div className={style.item}>
  <NavLink to='/settings' style ={({ isActive}) => ({color: isActive ? 'rgb(58 163 207)' : 'black'})}>Settings</NavLink>
  </div>
</nav>
}
// 'rgb(58 163 207)'
export default Navbar 