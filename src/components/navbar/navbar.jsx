import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {LogoutUser} from '../../redux/actions';
const NavBar = ({ token }) => {
  console.log("1");

  const [isLogin, isLogout] = useState(false);
  // const [auth , setAuth] = useState('')
  console.log(isLogin)
  const dispatch = useDispatch();
  const removeToken = () => {
    localStorage.removeItem("token");
    isLogout(true);
    dispatch(LogoutUser({name : 'u'}))
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
              School Managment
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/" activeClassName="active">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                {!token || isLogin ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Login
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink onClick={removeToken} className="nav-link" to="/">
                      Logout
                    </NavLink>
                  </li>
                )}
              </ul>
              <form className="form-inline my-2 my-lg-0"></form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
