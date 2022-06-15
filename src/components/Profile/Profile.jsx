import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return  <div> 
  <ProfileHead />
  <ProfileInfo />
  <MyPostsContainer store={props.store} />
</div>
}
export default Profile;