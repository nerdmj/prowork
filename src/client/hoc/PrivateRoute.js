import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import URL from '../constants/routes';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ?   <MainLayout> <Component {...props} />   </MainLayout>
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)
