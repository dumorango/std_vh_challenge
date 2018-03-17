import { actions } from "react-redux-form";
import { login } from './LoginService';
import { push } from 'react-router-redux';

export const NEW_SESSION = 'NEW_SESSION';
export const LOGOUT = 'LOGOUT';

export const loginActions = {
   login: (credentials) => (dispatch) => {
        dispatch(actions.submit("credentials", logInSession(credentials, dispatch)));        
   },
   newSession: (session) => ({
    type: NEW_SESSION,
    session
  }),
}

async function logInSession(credentials, dispatch) {
    const session = await login(credentials);  
    dispatch(push('/'));
    dispatch(loginActions.newSession(session.data));      
  }