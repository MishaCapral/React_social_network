import style from './ProfileInfo.module.css'
import avatar from '../../../Assets/Images/avatar.jpg'
import Preloader from '../../Common/Preloader'


let car = 'Nissan Leaf'
let country = 'Ukraine' + ',' + 'Zhytomyr'
const ProfileInfo = (props) =>{
  if(!props.profile){
    return <Preloader />
  }
  return(
<div className={style.profileInfo}> 
<img src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt='avatar profile' className={style.avatar}></img>

<div className={style.personalInfo}>
<h2 className={style.name}>{props.profile.fullName}</h2>
<p className={style.userDescription}>About me: {props.profile.aboutMe}</p>
</div>

<div className={style.jobStatus}>

  <div>Job status: {props.profile.lookingForAJob ? <span>in search</span> : <span>not looking</span> }</div>
  <p>{props.profile.lookingForAJobDescription}</p>
</div>
</div>
  )
}
export default ProfileInfo