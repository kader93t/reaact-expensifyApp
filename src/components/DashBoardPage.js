import React from "react"
import ExpensesList from './ExpnesesList'
import ExpenseFilter from "./ExpenseFilter"

const ExpenseDashBoardPage = () => (
    <div>
        Welcom to react Router
        <ExpenseFilter />
        <ExpensesList />
    </div>
);


export default ExpenseDashBoardPage;