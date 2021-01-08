import React from 'react'
import { shallow } from "enzyme"
import { ExpensesList } from './../../components/ExpnesesList';
import { expenses } from "./../fixture/expenses"
test("should render the expenses list ", () => {
    const wrapper = shallow(<ExpensesList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();

});

test("should render empty list", () => {
    const wrapper = shallow(<ExpensesList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})