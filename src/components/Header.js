import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import { startLogOut, startSignOut } from "../actions/auth";
export const Header = (props) => (
    <div>
        <h1>Expense App</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">  Home  </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create expense </NavLink>   
        <button onClick={props.signOut}>LogOut</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header);