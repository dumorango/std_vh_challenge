import { NEW_SESSION, LOGOUT } from "./LoginActions";

const intialState = {}

export function loginReducer(state = intialState, action) {
    switch (action.type) {
      case NEW_SESSION:      
        return {...state, session: action.session};
      case LOGOUT:
        return {...state, session: null }; 
      default:
        return state;
    }
  }