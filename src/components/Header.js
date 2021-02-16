import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogOut, startSignOut } from "../actions/auth";
export const Header = (props) => (
  <div className="header">
    <div className="content-container" >
      <div className="header__content">
      <Link className="header__title" to="/dashboard"  >
        <h1>Expensify</h1>
      </Link>

      <button className="button__logout" onClick={props.signOut}>
          Logout
      </button>
        
      </div>
  </div>
    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);
