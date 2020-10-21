import React, { useState } from "react";
import "./signup.css";
import { useSelector, useDispatch } from "react-redux";
import {signUpTeacher} from '../../redux/actions';

export const AddTeacher = () => {

  const [newName , setName] = useState('');
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [newGrade, setGrade] = useState('');

  const dispatch = useDispatch();

  const teacherData = {
    name : newName ,
    email : newEmail ,
    password : newPassword ,
    grade : Number(newGrade)
  }
  const token = localStorage.getItem('token')

  const onSubmitChange = (e) => {
    e.preventDefault();
    dispatch(signUpTeacher(teacherData , token))
     setName("");
     setEmail("");
     setPassword("");
     setGrade("");
}


  return (
    <div className="login-box">
      <h2>SignUp Teacher</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setName(e.target.value)}
            value={newName}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setEmail(e.target.value)}
            value={newEmail}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required=""
            onChange={(e) => setPassword(e.target.value)}
            value={newPassword}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setGrade(e.target.value)}
            value={newGrade}
          />
          <label>Grade</label>
          <input
            className="btn"
            onClick={onSubmitChange}
            type="submit"
            value="Create Teacher"
          />
        </div>
      </form>
    </div>
  );
};

