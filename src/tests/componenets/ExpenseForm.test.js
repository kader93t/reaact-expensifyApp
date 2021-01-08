import React from 'react';
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../fixture/expenses";
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
test('should render the form with empty vlaue ', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
});

test('should render the form with existing value ', () => {
    const wrapper = shallow(<ExpenseForm expense= { expenses[0] } />);
    expect(wrapper).toMatchSnapshot(wrapper);
});

test("should render the error ", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    const form = wrapper.find("form");
    form.simulate("submit", {
        preventDefault: () => {
            
        }
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description', () => {
    const value = "test description"
    const wrapper = shallow(<ExpenseForm />);
    const descriptionField = wrapper.find("input").at(0);
    descriptionField.simulate("change", {
        target: {
            value
        }
    });
    expect(wrapper.state("description")).toBe(value);
});

test("should set the note textarea ", () => {
    const value = "test note";
    const wrapper = shallow(<ExpenseForm />);
    const note = wrapper.find("textarea");
    note.simulate("change", {
        target: {
            value
        }
    });
    expect(wrapper.state("note")).toBe(value);
});

test('should set the correct amount', () => {
    const value = "32.23";
    const wrapper = shallow(<ExpenseForm />);
    const amount = wrapper.find("input").at(1);
    amount.simulate("change", {
        target: {
            value
        }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set the value amount ", () => {
    const value = "32.32.22"
    const wrapper = shallow(<ExpenseForm />);
    const amount = wrapper.find("input").at(1);
    amount.simulate("change", {
        target: {
            value
        }
    });
    expect(wrapper.state("amount")).toBe("");
});

test("should the form called correctly with valid data", () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit', {
        preventDefault: () => { }
    });
    
    expect(wrapper.state('error')).toBe('');
    expect(onSubmit).toBeCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createAt: expenses[0].createAt
       
    })
});

test("should set the new date on date change ", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    const sdp = wrapper.find(SingleDatePicker);
    sdp.prop('onDateChange')(now);
    //SingleDatePicker.props('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
});

test('should change the calendar focused', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });
    expect(wrapper.state("calendarFocused")).toBe(true);
})
