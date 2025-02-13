import React from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import  Header  from "../components/Header";
export const PrivateRoute = ({
    component: Component,
    isAuthonticated,
    ...rest}) => (
    <Route  {...rest} component={(props) => (
        isAuthonticated ?
            <div>
                <Header/>
                <Component {...props} />
            </div>
            
        : <Redirect to="/" />
    )}/>
);

const mapStateToProps = (state) => (
    {
        isAuthonticated: !!state.auth.uid
    }
)

export default connect(mapStateToProps)(PrivateRoute);