import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator,setUsersTotalCountActionCreator } from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageActionCreator(page))
    },
    setUsersTotalCount: (totalUsersCount) => {
      dispatch(setUsersTotalCountActionCreator(totalUsersCount))
    },
}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)