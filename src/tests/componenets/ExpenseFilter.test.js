import React from 'react';
import { ExpensesFilters } from './../../components/ExpenseFilter';
import { shallow } from 'enzyme';
import { filter, altFilter } from './../fixture/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
let setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    setSortByDate = jest.fn();
    setSortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpensesFilters
        setTextFilter={setTextFilter}
        setSortByDate={setSortByDate}
        setSortByAmount={setSortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filter={filter}
    />);
});

test('should render the filter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render the altFilter correctly', () => {
    wrapper.setProps({ filter: altFilter });
    expect(wrapper).toMatchSnapshot();
});

test("should handle change the sortBy to date", () => {
    const select = wrapper.find("select");
    select.simulate('change', {
            target: {
                value: "date"
            }
    });
    expect(setSortByDate).toHaveBeenLastCalledWith();
})

test("should handle sortBy to amount", () => {
    const select = wrapper.find("select");
    select.simulate('change', {
        target: {
            value: "amount"
        }
    });
    expect(setSortByAmount).toHaveBeenLastCalledWith();
})

test("should handle set text filter", () => {
    const input = wrapper.find("input");
    const value = "textFilter";
    input.simulate("change", {
        target: {
            value
        }    
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("shlould handle onChangeDate", () => {
    const picker = wrapper.find(DateRangePicker);
    const startDate = moment();
    const endDate = moment(123456789);
    picker.prop("onDatesChange")({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should hadndle the focuse of date picker", () => {
    const picker = wrapper.find(DateRangePicker);
    picker.prop("onFocusChange")('startDate');
    expect(wrapper.state("focusedInput")).toBe('startDate');
});