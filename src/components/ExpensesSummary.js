import React from 'react'
import ReactDOM from 'react-dom'
import  selectExpenses  from "./../selectors/expenses";
import { connect } from 'react-redux'
import { expenseSummary } from "./../selectors/expense-total";
import numeral from "numeral";
export const ExpensesSummary = (props) => {
    const [numberOfExpense, total] = expenseSummary(props.expenses);
    const expenseWord = numberOfExpense == 1 ? "expense" : "expenses";
    return <div>
        <p>Viewing : {numberOfExpense} {expenseWord} , The total : {numeral(total).format('$0,0.00')}</p>
    </div>
};

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filter)
    }
);

export default connect(mapStateToProps)(ExpensesSummary);