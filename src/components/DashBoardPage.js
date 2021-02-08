import React from "react"
import ExpensesList from './ExpnesesList'
import ExpenseFilter from "./ExpenseFilter"
import  ExpensesSummary  from "./ExpensesSummary";

const ExpenseDashBoardPage = () => (
    <div>
        Welcom to react Router
         <ExpensesSummary />
        <ExpenseFilter />
        <ExpensesList />
    </div>
);

export default ExpenseDashBoardPage;