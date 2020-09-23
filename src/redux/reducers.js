import { LOGIN_SUCCESS } from "./constant";


const initialState = {
    userData : {} ,
    error : '',
    isAuthenticated : '',
    token : '' ,
    teachers : []
}

export const AuthLogin = (state = initialState , action={}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
              ...state,
              userData: action.payload.user,
              isAuthenticated : true ,
              token : action.payload.token

            };
            case  'ERROR'  :

            return {
              ...state,
              error: action.payload,
              isAuthenticated : false
            };
            case 'GET_TEACHERS' : 
            return {
              ...state, teachers : action.payload ,
              isAuthenticated : true
            }

            case 'GET_TEACHER_ERROR' : 
            return {
              ...state , error : action.payload
            }
        default:
            return state;
    }
}