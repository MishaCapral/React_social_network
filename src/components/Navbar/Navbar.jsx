import style from './Navbar.module.css'

const Navbar = ()=> {
  return <nav className={`${style.nav} borderShadow`}> 
<div className={style.item}><a href='/profile'>Profile</a></div>
<div className={style.item}><a href='/dialogs'>Messages</a></div>
<div className={style.item}><a href='/news'>News</a></div>
<div className={style.item}><a href='#'>Music</a></div>
<div className={style.item}><a href='/settings'>Settings</a></div>
</nav>
}
export default Navbar 