import React from 'react'
import ExpenseListItem from "./../../components/ExpenseItem";
import { shallow } from "enzyme";
import {expenses} from "./../fixture/expenses"

test("should render the item ", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
