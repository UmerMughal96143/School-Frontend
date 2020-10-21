import React, { useState } from "react";
import "./mark.css";
import {useSelector , useDispatch} from 'react-redux';
import {AssignNumber} from '../../redux/teacher-action';
import {Link} from 'react-router-dom'
import { Teacher } from "./teacher";

// import axios from 'axios';

const MarkAssignment = (user) => {

  const {_id , student_id} = user.user;
  console.log(_id, student_id);
  const [marked , setMarked] = useState(false);
  const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    
    const token = localStorage.getItem('token');

    const data = {
        marks : +number,
        studen_id : student_id
    }


  const onSubmitChange = async (event) => {
    event.preventDefault();
    dispatch(AssignNumber(token,_id,data));
    // setId("");
    setNumber("");
    setMarked(true);
  };

  if(marked){
    return <Teacher/>
  }
  else {

    return (
      <div className="login-box">
        <h2>Mark Assignment</h2>
        <form>
          {/* <div className="user-box">
          <input
            type="text"
            name="text"
            required
            onChange={(e) => setId(e.target.value)}
          />
          <label>User Id</label>
        </div> */}
          <div className="user-box">
            <input
              type="number"
              name="number"
              required
              onChange={(e) => setNumber(e.target.valueAsNumber)}
            />
            <label>Number</label>
          </div>
          <div className="design">
            <input
              className="btn"
              onClick={onSubmitChange}
              type="submit"
              value="Mark"
            />
          </div>
        </form>
      </div>
    );

  }

  
};

export default MarkAssignment;
