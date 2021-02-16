import React from "react";

import { connect } from "react-redux";
import ExpensItem from "./ExpenseItem";
import selectExpenses from "./../selectors/expenses";

export const ExpensesList = (props) => (
    <div className="content-container">
    <div className="list__header">
      <div className="show-for-small-screen">Expenses</div>
      <div className="show-for-wide-screen">Expense</div>
      <div className="show-for-wide-screen">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list__empty-list"> No expenses </div>
      ) : (
        props.expenses.map((expense) => (
          <ExpensItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filter),
});

export default connect(mapStateToProps)(ExpensesList);
