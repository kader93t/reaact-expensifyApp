import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';
import { expenses } from './../fixture/expenses';
let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<CreateExpensePage onSubmit={onSubmit} history={history} />);
});

test('should create expense ', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call on submite', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(onSubmit).toHaveBeenCalledWith(expenses[0]);
    expect(history.push).toHaveBeenCalledWith("/");
});
