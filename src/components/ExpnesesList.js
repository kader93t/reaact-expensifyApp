import React from 'react'

import { connect } from 'react-redux'
import ExpensItem from "./ExpenseItem"
import selectExpenses from "./../selectors/expenses"

export const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense) => (
          
            <ExpensItem key={expense.id} {...expense}/>
        ))}
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses,state.filter)
    }
);

export default connect(mapStateToProps)(ExpensesList);
