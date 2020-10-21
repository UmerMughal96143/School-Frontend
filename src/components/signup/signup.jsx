import React, { useState } from "react";
import "./signup.css";
import { useSelector, useDispatch } from "react-redux";
import { signUpStudent } from "../../redux/student-actions";
import { Redirect } from "react-router-dom";

  const Signup = () => {
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [newGrade, setGrade] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.StudentLogin.isAuthenticated);
   const { err } = useSelector((state) => state.StudentLogin.errors);
   console.log(err);

  const teacherData = {
    name: newName,
    email: newEmail,
    password: newPassword,
    grade: Number(newGrade),
    rollNumber : rollNumber
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
    dispatch(signUpStudent(teacherData));
    setName('');
    setEmail('');
    setPassword('');
    setGrade('')
  };

  return (
    <div className="login-box">
      <h2>Student SignUp</h2>
      <p className={`${err ? "error" : "null"}`}>{err} </p>
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
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setRollNumber(e.target.value)}
            value={rollNumber}
          />
          <label>Roll No</label>
        </div>
        <input
          className="btn"
          onClick={onSubmitChange}
          type="submit"
          value="Sign Up"
        />
        {isAuth ? <Redirect to="/signin" /> : <Redirect to="/signup" />}
      </form>
    </div>
  );
};


export default Signup;