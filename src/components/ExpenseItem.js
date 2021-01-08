import React from 'react'
import { NavLink } from "react-router-dom"

const ExpenseItem = (props) => (
    <div>
        
        <NavLink to={"/edite/"+props.id}>{props.description}</NavLink>
        { props.amount} - { props.createAt}

    </div>
);

export default ExpenseItem;