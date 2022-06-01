import style from './ProfileInfo.module.css'

let car = 'Nissan Leaf'
let country = 'Ukraine' + ',' + 'Zhytomyr'
const ProfileInfo = (props) =>{
  return(
<div className={style.profileInfo}> 
<img src='https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg' alt='avatar profile' className={style.avatar}></img>
<div className={style.personalInfo}>
<h2 className={style.name}>Carl Johnson</h2>
<p className={style.userDescription}> Drives a {car}</p>
<p className={style.userDescription}>From {country}</p>
</div>
</div>
  )
}
export default ProfileInfo