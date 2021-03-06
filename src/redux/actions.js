import {LOGIN_SUCCESS} from './constant';
import axios from 'axios';




export const  postLogin  =  (userData) => dispatch =>  {
    

      axios
        .post("http://localhost:3002/user/admin/signin", {...userData})
        .then(response => dispatch ({
          type : LOGIN_SUCCESS ,
          payload : response.data

        })).catch(err => dispatch({
            type : 'ERROR' ,
            payload : err
        }))

}


export const getTeachers = (token) => (dispatch) => {
  console.log(token)
  axios
    .get("http://localhost:3002/user/admin/teachers" ,{
      headers : {
        'Authorization' : token 
      }
    })
    .then((response) =>
      dispatch({
        type: 'GET_TEACHERS',
        payload: response.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "GET_TEACHER_ERROR",
        payload: err,
      })
    );
};



export const signUpTeacher = (teacherData , token) => (dispatch) => {
 console.log(teacherData , token)
  axios
    .post("http://localhost:3002/user/admin/add-teacher", { ...teacherData } ,{
      headers :{
        'Authorization' : token
      }
    } )
    .then((response) =>
      dispatch({
        type: "SIGNUP_TEACHER",
        payload: response.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "ERROR",
        payload: err,
      })
    );
};
