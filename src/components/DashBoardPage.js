import React from "react"
import ExpensesList from './ExpnesesList'
import ExpenseFilter from "./ExpenseFilter"
import  ExpensesSummary  from "./ExpensesSummary";

const ExpenseDashBoardPage = () => (
    <div>
         <ExpensesSummary />
        <ExpenseFilter />
        <ExpensesList />
    </div>
);

export default ExpenseDashBoardPage;