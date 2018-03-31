import { Form, Control } from 'react-redux-form';
import React from 'react';

import {
    Card
} from 'rmwc/Card';
import { 
    Button
 } from 'rmwc/Button';

import { TextFieldControl } from '../../commons/TextFieldControl';

export const MODEL = "credentials";

export const LoginForm = ({ onSubmit }) =>
    <Card style={{width: '20rem', padding: '1rem'}}>
        <h2> Login </h2>
        <Form model={MODEL} 
            onSubmit={onSubmit}>
            <Control.input
                type="email"
                model=".email"
                component={TextFieldControl}
            />
            <Control.input
                type="password"
                model=".password"
                component={TextFieldControl}
            />        
            <Button>Login</Button>
        </Form>    
    </ Card>;