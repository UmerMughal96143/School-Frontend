import React, { useState } from 'react';
import './signin.css';
// import axios from 'axios';
import { postLogin } from "../../redux/actions";
import {useSelector ,   useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';


    const Signin = () => {
   const [newEmail, setEmail] = useState("");
   const [newPassword, setPassword] = useState({});

   const { name, role, email } = useSelector(
     (state) => state.AuthLogin.userData
   );
   const token = useSelector((state) => state.token);
  

   console.log(name , email , role , token)
   const dispatch = useDispatch();
  
   const userData = {
     email :newEmail,
     password :newPassword,
   };


   const onSubmitChange = async (event) => {
      event.preventDefault();
      dispatch(postLogin(userData));
      setEmail('');
      setPassword('');
   };

  
   
   
   return (
     <div className="login-box">
       <h2>Login</h2>
       <form>
         <div className="user-box">
           <input
             type="text"
             name="email"
             required
             onChange={(e) => setEmail(e.target.value)}
             value={newEmail}
           />
           <label>Username</label>
         </div>
         <div className="user-box">
           <input
             type="password"
             name="password"
             required
             onChange={(e) => setPassword(e.target.value)}
             value={newPassword}
           />
           <label>Password</label>
         </div>
         <div className="design">
           <input
             className="btn"
             onClick={onSubmitChange}
             type="submit"
             value="Sign in"
           />
           {role === "admin" ? (
             <Redirect to="/admin-menu" />
           ) : (
             <Redirect to="/signin" />
           )}
         </div>
       </form>
     </div>
   );
 };
  
 
  export default Signin;