import React, { useEffect, useState } from 'react'
import {useSelector , useDispatch} from 'react-redux';
import {GetAssignments} from '../../redux/teacher-action';
import {SearchBox} from './search-box';
import {Link, Redirect} from 'react-router-dom';
import MarkAssignment from './mark';

export const Teacher = () => {

    const [search , setSearch] = useState('');
    const [clickedUser, setUser] = useState({});
    const [render, setRender] = useState(false);





    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const assignments  = useSelector((state) => state.Assignments.assignments)
    console.log(assignments)
    console.log(clickedUser)



    const onSubmit = (user) => {
        setUser(user);
        setRender(true);
      }


    useEffect(() => {

        dispatch(GetAssignments(token))
    } , [])

    const onSearchChange = (e) => {
      
      setSearch(e.target.value)
      console.log(search)
      
      
    }
    if(render){
      return <MarkAssignment user = {clickedUser}/>
    }
    else {
      return (
        <div className="btns-space">
          <SearchBox onSearchChange={onSearchChange} />
          <div className="center">
            <table class="rwd-table">
              <tr>
                <th>Grade</th>
                <th>Obtained Marks</th>
                <th>Assignments</th>
              </tr>
              {assignments.map((assign, ind) => {
                return (
                  <tbody>
                    <tr key={ind}>
                      <td data-th="Movie Title">{assign.grade}</td>
                      <td data-th="Movie Title">
                        {assign.marks ? `${assign.marks}` : `Pending...`}
                      </td>
                      <td data-th="Movie Title">
                        <Link onClick={() => onSubmit(assign)}>
                          {assign.file}
                        </Link>

                        <td data-th="Movie Title">Name : {assign.name}</td>
                        <td data-th="Movie Title">
                          RollNo : {assign.rollNumber}
                        </td>
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

    
}

