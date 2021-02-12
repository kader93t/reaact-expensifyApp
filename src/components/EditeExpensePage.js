import React from "react"
import { connect } from "react-redux";
import { startEditeExpense, startRemoveExpense } from "../actions/expneses";
import ExpenseForm from "./ExpenseForm"

export class EditeExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        this.props.modifieExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }
    
    onButtonClick = (e) => {
        this.props.onButtonClick(this.props.expense.id);
        this.props.history.push("/");
    }
    
    render() {
        return (<div>
            <ExpenseForm expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button
                onClick={this.onButtonClick}
            > Remove </button>
        </div>
        );
    }
}

const mapStateToProps = (state, props) => 
    ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
}
    );

const mapDispatchToProps = (dispatch) => (
    {
        modifieExpense: (id, expense) => dispatch(startEditeExpense(id, expense)),
        onButtonClick: (id)=> dispatch(startRemoveExpense(id))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(EditeExpensePage);