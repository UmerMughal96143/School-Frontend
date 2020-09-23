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
        payload: err,
      })
    );
};


export const signInStudent = (studentData) => (dispatch) => {
  console.log(studentData);
  axios
    .post("http://localhost:3002/user/student/signin", { ...studentData })
    .then((response) =>
      dispatch({
        type: "SIGNIN_STD",
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
