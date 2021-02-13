import React from 'react'
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";


export const Login = (props) => (
    <div>
        <button onClick={props.login}> Login </button>

    </div>
);

const mapDispatchToProps = (dispatch) => (
    {
        login: () => dispatch(startLogin())
    }
);

export default connect(undefined, mapDispatchToProps)(Login);