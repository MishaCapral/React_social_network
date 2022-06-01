import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileHead from './ProfileHead/ProfileHead';

const Profile = () => {
  return  <div> 
  <ProfileHead />
  <div>ava + desc</div>
  <MyPosts />
</div>
}
export default Profile;