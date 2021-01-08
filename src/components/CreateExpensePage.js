import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpense }from "./../actions/expneses.js"
import ExpenseForm from "./ExpenseForm"

export class CreateExpensePage extends Component {

    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1>Add expense </h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        onSubmit: (expense) => dispatch(addExpense(expense))
    }
);

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
