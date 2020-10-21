import React, { useEffect } from 'react'
import {GetAssignments} from '../../redux/student-actions';
import { useSelector, useDispatch } from "react-redux";
import './table.scss';
import { Link } from 'react-router-dom';

export const GetAssignmentStd = () => {

    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    const assignmen = useSelector((state) => state.StudentLogin.assignment)
    useEffect(() => {

        dispatch(GetAssignments(token))

    },[])

    function NewTab(link) {
      window.open(link, "_blank");
    } 
    return (
      <div className="btns-space">
        <div className="center">
          <table class="rwd-table">
            <tr>
              <th>Grade</th>
              <th>Obtained Marks</th>
              <th>Assignments</th>
            </tr>
            {assignmen.map((assign, ind) => {
              return (
                <tbody>
                  <tr key={ind}>
                    <td data-th="Movie Title">{assign.grade}</td>
                    <td data-th="Movie Title">
                      {assign.marks ? `${assign.marks}` : `Pending...`}
                    </td>

                    <td data-th="Movie Title">
                      <a href="">{assign.file}</a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
}
