import style from './Header.module.css'

const Header = () =>{
 return <header className={style.header}>
   <div className={style.logo}>
     <img src='https://obc.hr/wp-content/uploads/2021/01/OBCshare.jpg' className={style.logo_img}></img>
        <p className={style.logo_name}>only best cars</p>
        </div>
      </header>
}
export default Header