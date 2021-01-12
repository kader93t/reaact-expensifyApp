import React from 'react'
import { shallow } from "enzyme";
import { expenses } from "../fixture/expenses";
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render the total summary ', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should rnder the sammary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});


