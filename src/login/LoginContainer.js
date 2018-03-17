import React from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { LoginForm, MODEL } from './LoginForm';
import { loginActions } from './LoginActions';

const Login = props => <LoginForm onSubmit={props.login}/>

const mapStateToProps = (state) => ({
    form: state.forms[MODEL],
    session: state.login && state.login.session
  });
  
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(loginActions, dispatch);
  
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
