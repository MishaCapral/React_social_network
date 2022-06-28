import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';

// import style from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
// import ProfileHead from './ProfileHead/ProfileHead';
// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPostsContainer from './MyPosts/MyPostsContainer';

class ProfileContainer extends React.Component {
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setUserProfile(response.data)
      });
    }

  render(){
    return  <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);