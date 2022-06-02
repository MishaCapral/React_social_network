import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return  <div> 
  <ProfileHead />
  <ProfileInfo />
  <MyPosts posts={props.posts}/>
</div>
}
export default Profile;