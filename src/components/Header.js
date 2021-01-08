import React from 'react';
import {NavLink} from "react-router-dom"
const Header = () => (
    <div>
        <h1>Expense App</h1>
        <NavLink to="/" exact={true}activeClassName="is-active">  Home  </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create expense </NavLink>
        <NavLink to="/edite/25" activeClassName="is-active"> Edite expnese </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Edite expnese </NavLink>     
    </div>
);
export default Header;