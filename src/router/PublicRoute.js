import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { connect }  from "react-redux";
export const PublicRoute = ({
    isAuthanticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (    
         isAuthanticated ?
            <Redirect to="/dashboard" />
            : <Component {...props}/>
    )} />
);

const mapStateToProps = (state) => ({
    isAuthanticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
