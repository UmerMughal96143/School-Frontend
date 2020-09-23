import React from 'react'
import './navbar.css';
import {NavLink} from 'react-router-dom'

 const navbar = () => {
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
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0"></form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}

export default navbar ;
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { NavLink } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const NavBar = () =>  {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
            
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             SMS
//           </Typography>
//           <NavLink className="nav-link" to="/signin">
//             Login
//           </NavLink>
//           <NavLink className="nav-link" to="/signup">
//             SignUp
//           </NavLink>
//           <NavLink className="nav-link" to="/home">
//             Home
//           </NavLink>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default NavBar;