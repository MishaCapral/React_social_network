import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return  <div className={style.profile_wrapper}> 
  <ProfileHead profile={props.profile}/>
  <div className={style.profile_info_wrapper}>
  <ProfileInfo profile={props.profile}/>
  <MyPostsContainer />
  </div>
</div>
}
export default Profile;