import style from './ProfileInfo.module.css'
import avatar from '../../../Assets/Images/avatar.jpg'

let car = 'Nissan Leaf'
let country = 'Ukraine' + ',' + 'Zhytomyr'
const ProfileInfo = (props) =>{
  return(
<div className={style.profileInfo}> 
<img src={avatar} alt='avatar profile' className={style.avatar}></img>
<div className={style.personalInfo}>
<h2 className={style.name}>Carl Johnson</h2>
<p className={style.userDescription}> Drives a {car}</p>
<p className={style.userDescription}>From {country}</p>
</div>
</div>
  )
}
export default ProfileInfo