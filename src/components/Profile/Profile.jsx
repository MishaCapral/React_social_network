import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return  <div> 
  <ProfileHead />
  <ProfileInfo />
  <MyPosts />
</div>
}
export default Profile;