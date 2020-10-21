import axios from 'axios';

export const GetAssignments = (token) => (dispatch) => {

     console.log(token)
  axios
    .get("http://localhost:3002/user/assignment/" ,{
      headers : {
        'Authorization' : token 
      }
    })
    .then((response) =>
      dispatch({
        type: 'GET_ASSIGNMENTS',
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



export const AssignNumber = (token , id  , data ) => (dispatch) => {
  console.log(token);
  axios
    .patch(
      `http://localhost:3002/user/assignment/mark/${id}`,
      { ...data },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) =>
      dispatch({
        type: "GIVE_NUMBERS",
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



