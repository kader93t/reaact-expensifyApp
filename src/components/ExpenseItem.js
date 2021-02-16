import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseItem = (props) => (
  <Link className="list-item" to={"/edite/" + props.id}>
    <div className="">
      <h3 className="list-item__title">{props.description}</h3>
      <span className="list-item__sub-title">
        {moment(props.createAt).format("Do MMMM YYYY")}
      </span>
    </div>
    <div>
      <h3 className="list-item__amount">
        {numeral(props.amount).format("$0,0.00")}
      </h3>
    </div>
  </Link>
);

export default ExpenseItem;
