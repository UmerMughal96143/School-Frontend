import React, { useState } from 'react';
import './signin.css';
// import axios from 'axios';
import { postLogin } from "../../redux/actions";
import {useSelector ,   useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

    const Signin = ({tokenFunc}) => {
   const [newEmail, setEmail] = useState("");
   const [newPassword, setPassword] = useState({});

   const { name, role, email } = useSelector(
     (state) => state.AuthLogin.userData
   );
    const token = localStorage.getItem('token')
    tokenFunc(token)
   const dispatch = useDispatch();
   const {err} = useSelector((state) => state.AuthLogin.authError)
    console.log(err)
  
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

   const Validation = () => {
     if(role === 'admin'){
       return <Redirect to='/admin-menu' />
     }
     else if (role === 'teacher') {
      return <Redirect to="/teacher-menu"/>;
     }else if(role === 'student') {
       return <Redirect to='/student-menu' />
     }
     else {
        return <Redirect to='/signin' />
     }
   }
   
   return (
     <div className="login-box">
       <h2>Login</h2>
       <p className={`${err ? 'error' : 'null'}`}>{err} </p>
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
           {Validation()}
         </div>
       </form>
     </div>
   );
 };
  
 
  export default Signin;