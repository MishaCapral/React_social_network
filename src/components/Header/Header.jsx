import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) =>{
 return <header className={style.header}>
   <div className={style.logo}>
     <img src='https://obc.hr/wp-content/uploads/2021/01/OBCshare.jpg' className={style.logo_img}></img>
        <p className={style.logo_name}>OnlyFans</p>
        </div>

        <div className={style.loginBlock}>
          {props.isAuth ? <p className={style.loginBlock_login}>{props.login}</p> : <NavLink to={'/login'} className={style.loginBlock_login}>Login</NavLink>}
        </div>
      </header>
}
export default Header