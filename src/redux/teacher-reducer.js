const initialState = {
  assignments: [],
  errors : '' ,
  searchField  : ''
};


export const Assignments = (state = initialState , action = {}) => {

    switch (action.type) {
      case "GET_ASSIGNMENTS":
        return {
          ...state,
          assignments: action.payload.assignments,
        };
      case "ERROR":
        return {
          ...state,
          errors: action.payload,
        };
      default:
        return state;
    }

}