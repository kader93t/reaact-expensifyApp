import React from 'react'
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";


export const Login = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title"> Expensify App</h1>
            <p> Get your expenses under control.</p>
            <button className="button__google" onClick={() => props.login("google")}> Login using Google </button>
            <button className="button__facebook" onClick={() => props.login("facebook")}> Login using Facebook </button>
            <button className="button__github" onClick={() => props.login("github")}> Login using GitHub </button>
            
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => (
    {
        login: (provider) => dispatch(startLogin(provider))
    }
);

export default connect(undefined, mapDispatchToProps)(Login);