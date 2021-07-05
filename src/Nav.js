import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

// redux
// import {useDispatch,useSelector} from "react-redux";
// import {selectUser, login, logout} from "./features/userSlice";

// css
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  // const dispatch = useDispatch();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix-avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
