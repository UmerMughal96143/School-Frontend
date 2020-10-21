const intitalState = {
    isAuthenticated : '',
    errors : '',
    assignment : []
}


export const  StudentLogin =(state = intitalState , action ={}) => {

    switch(action.type) {
        case 'SIGNUP_STD' : 
        return {
            ...state , isAuthenticated : true
        }
        case 'UPLOAD_ASSIGNMENT' : 
        return {
            ...state 
        }
        case 'GET_ASSIGNMENT' : 
        return {
            ...state, assignment : action.payload.assignments
        }
        case 'ERROR' : 
        return {
            ...state , errors : action.payload
        }
        default :
        return state
    }
    
}