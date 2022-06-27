import React from 'react'
import * as axios from 'axios'
import Users from './Users'

class UsersAPIComponent extends React.Component{
componentDidMount(){
  if(this.props.users.length === 0){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount)
    });
}
}
onPageChanged = (page) => {
  this.props.setCurrentPage(page);
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    });

}
render(){
  return <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow} 
  />
}
}
export default UsersAPIComponent