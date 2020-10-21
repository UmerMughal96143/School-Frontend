import axios from 'axios';

export const signUpStudent = (studentData) => (dispatch) => {
  console.log(studentData);
  axios
    .post("http://localhost:3002/user/student/signup", { ...studentData })
    .then((response) =>
      dispatch({
        type: "SIGNUP_STD",
        payload: response.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      })
    );
};


export const UploadAssignment = (studentData , token) => (dispatch) => {
  console.log(studentData , token);
  axios
    .post("http://localhost:3002/user/assignment/upload", studentData,{
      headers : {
        'Authorization' : token
      }
    })
    .then((response) =>
      dispatch({
        type: "UPLOAD_ASSIGNMENT",
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


export const GetAssignments = (token) => (dispatch) => {
  console.log(token);
  axios
    .get("http://localhost:3002/user/assignment/", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_ASSIGNMENT",
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
