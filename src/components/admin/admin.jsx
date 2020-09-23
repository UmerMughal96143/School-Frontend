import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import {getTeachers} from '../../redux/actions';
import './table.scss';


export const AdminPage = () => {
    const token = useSelector((state) => state.AuthLogin.token);
    const teachers = useSelector((state) => state.AuthLogin.teachers); 
    

    const dispatch = useDispatch();
    console.log(teachers);

    useEffect(() => {
        dispatch(getTeachers(token))
    } , [])

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     dispatch(getTeachers(token));
    // }
    
    return (
      <div className="btns-space">
        {/* <NavLink to="/add-teacher" className="btn">
          Add Teacher
        </NavLink> */}
        <div className="center">
          <table class="rwd-table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
            </tr>
            {teachers.map((teacher, ind) => {
              return (
                <tbody>
                <tr key={ind}>
                  <td data-th="Movie Title">{teacher.name}</td>
                  <td data-th="Genre">{teacher.email}</td>
                  <td data-th="Year">{teacher.grade}</td>
                </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
}

