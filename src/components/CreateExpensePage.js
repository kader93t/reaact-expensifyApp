import React, { Component } from "react";
import { connect } from "react-redux";
import { startAddExpense } from "./../actions/expneses.js";
import ExpenseForm from "./ExpenseForm";

export class CreateExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="summary">
          <div className="content-container">
            <h1 className="summary-page__title">Add expense </h1>
          </div>
        </div>
        <div className= "content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
