import React from 'react'
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage,setUsersTotalCount,setIsFetching } from "../../redux/usersReducer";
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../Common/Preloader';

const wrapper = {
  position: 'relative',
  width: '100%'
}

class UsersAPIComponent extends React.Component{
  componentDidMount(){
    if(this.props.users.length === 0){
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{withCredentials:true})
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }
  }
  onPageChanged = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`,{withCredentials:true})
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setIsFetching(false);
      });
  
  }
  render(){
    return <div style={wrapper}>
  
    {this.props.isFeatching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow} 
    />
    </div>
  }
  }

let mapStateToProps = (state) => {
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFeatching: state.usersPage.isFeatching
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return{
//     follow: (userId) => {
//       dispatch(followActionCreator(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users))
//     },
//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageActionCreator(page))
//     },
//     setUsersTotalCount: (totalUsersCount) => {
//       dispatch(setUsersTotalCountActionCreator(totalUsersCount))
//     },
//     setIsFetchingActionCreator: (isFeatching) => {
//       dispatch(setIsFetchingActionCreator(isFeatching))
//     }
// }
//}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching}
  )(UsersAPIComponent)