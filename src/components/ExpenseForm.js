import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";

import moment from "moment";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onChangeDescription = (e) => {
    const description = e.target.value;
    this.setState((oldState) => ({
      ...oldState,
      description,
    }));
  };

  onChangeNote = (e) => {
    const note = e.target.value;
    this.setState((oldState) => ({
      ...oldState,
      note,
    }));
  };

  onChangeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,3})?$/)) {
      this.setState((oldState) => ({
        ...oldState,
        amount,
      }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState((oldState) => ({
        error: "One of the important field is empty",
      }));
    } else {
      this.setState((oldState) => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onChangeAmount}
        />

        <textarea
          className="input-area"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onChangeNote}
        ></textarea>

        <SingleDatePicker
          date={this.state.createAt}
          onDateChange={(createAt) => {
            if (createAt) this.setState(() => ({ createAt }));
          }}
          focused={this.state.calendarFocused}
          onFocusChange={({ focused: calendarFocused }) => {
            this.setState(() => ({ calendarFocused }));
          }}
          id="my_id"
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
        <div >
          <button className='button'> Add Expnese </button>
        </div>
      </form>
    );
  }
}
