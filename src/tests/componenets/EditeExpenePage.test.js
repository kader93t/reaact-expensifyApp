import React from 'react';
import { EditeExpensePage } from './../../components/EditeExpensePage';
import { shallow } from 'enzyme'
import {expenses} from './../fixture/expenses'
let editeExpense, history, wrapper, onButtonClick;

beforeEach(() => {
    editeExpense = jest.fn();
    onButtonClick = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditeExpensePage
        expense={expenses[0]}
        modifieExpense={editeExpense}
        history={history}
        onButtonClick={onButtonClick} />);
 
});

test('should render test page correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should call the onSubmit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editeExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
});

test('should remove expense', () => {
    const btn = wrapper.find('button');
    btn.simulate('click', {
        e: {
            
        }
    });
    expect(onButtonClick).toHaveBeenCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenCalledWith('/');
});



