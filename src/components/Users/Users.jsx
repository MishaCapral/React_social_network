import { NavLink } from "react-router-dom";
import userAvatar from "../../Assets/Images/avatar.jpg";
import style from "./Users.module.css";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i === 10) break;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.pagination}>
        {" "}
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? style.selectedPage : ""}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={style.wrapper_cell}>
          <div className={style.wrapper_avatar}>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={style.avatar}
                src={u.photos.small != null ? u.photos.small : userAvatar}
                alt="User avatar"
              />
            </NavLink>
          </div>

          <div className={style.wrapper_userInfo}>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "f9a16b50-b72c-494d-ab03-433e35d04ec9",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "f9a16b50-b72c-494d-ab03-433e35d04ec9",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            <div className={style.userInfo}>
              <div>name: {u.name}</div>
              <div>status: {u.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
