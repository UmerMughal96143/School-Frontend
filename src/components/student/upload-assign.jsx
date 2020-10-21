import React, { useState } from 'react'
import './upload.css';
import {useSelector , useDispatch} from 'react-redux';
import {UploadAssignment} from '../../redux/student-actions';

export const UploadAssign = () => {

    

    const [assignment, setAssignment] = useState('');
    console.log(assignment);

    const token = localStorage.getItem("token");

    const dispatch = useDispatch();


    const send = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("assignment" , assignment);
        dispatch(UploadAssignment(formData , token))
        setAssignment('');
    }

    return (
        <div className="container">
                <div className="row ">
                    <form>
                        <div className=" form-group">
                            <input type="file" id='file' accept='.pdf' onChange={ event => {
                                const file = event.target.files[0]
                                setAssignment(file)
                            }}/>
                        </div>
                        <div className="form-group">
                            <button className="btnn" type="submit" onClick={send}>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}






