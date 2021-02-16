import React from "react";
import ReactDOM from "react-dom";
import selectExpenses from "./../selectors/expenses";
import { connect } from "react-redux";
import { expenseSummary } from "./../selectors/expense-total";
import { Link } from "react-router-dom";
import numeral from "numeral";
export const ExpensesSummary = (props) => {
  const [numberOfExpense, total] = expenseSummary(props.expenses);
  const expenseWord = numberOfExpense == 1 ? "expense" : "expenses";
  return (
    <div className="summary">
      <div className="content-container">
        <p className="summary-page__title">
          Viewing : <span> {numberOfExpense} </span> {expenseWord} , The total :{" "}
          <span>{numeral(total).format("$0,0.00")}</span>
        </p>

        <div className="summary-page__actions">
          <Link className="button" to="/create">
            {" "}
            Add expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filter),
});

export default connect(mapStateToProps)(ExpensesSummary);
