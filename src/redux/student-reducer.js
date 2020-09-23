const intitalState = {
    isAuthenticated : '',
    errors : '',
    student : {}
}


export const  StudentLogin =(state = intitalState , action = {}) => {

    switch(action.type) {
        case 'SIGNUP_STD' : 
        return {
            ...state , isAuthenticated : true
        }
        case 'SIGNIN_STD' : 
        return {
            ...state , student : action.payload
        }
        case 'ERROR' : 
        return {
            ...state , errors : action.payload
        }
        default :
        return state
    }
    
}