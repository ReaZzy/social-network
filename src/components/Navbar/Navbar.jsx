import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsNav from "./FriendsNav/FriendsNav";

const Navbar = (props) => {

    let friendsElements = props.friendsData.map(friend => <FriendsNav img ={friend.img}  id = {friend.id}/>)

  return (
    <nav className={s.nav}>
      <NavLink to="/profile" activeClassName={s.active}>
        Profile
        <br />
      </NavLink>
      <NavLink to="/messages" activeClassName={s.active}>
        Messages
        <br />
      </NavLink>
        <NavLink to="/users" activeClassName={s.active}>
            Users
            <br/>
        </NavLink>
      <NavLink to="/news" activeClassName={s.active}>
        News
        <br />
      </NavLink>
      <NavLink to="/music" activeClassName={s.active}>
        Music
        <br />
      </NavLink>
      <div className={s.line}></div>
      <NavLink to="/settings" activeClassName={s.active}>
        Settings
      </NavLink>

      <div>
          <div className={s.line}></div>
          <NavLink to="/friends" activeClassName={s.active}>
              Friends
          </NavLink>

          {friendsElements}
      </div>
    </nav>
  );
};

export default Navbar;
