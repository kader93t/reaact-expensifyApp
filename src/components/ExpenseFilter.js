import React from 'react'
import { connect } from 'react-redux';
import {setEndDate, setStartDate, setTextFilter} from "./../actions/filter"
import { setSortByDate, setSortByAmount } from "./../actions/filter"
import { DateRangePicker } from "react-dates"


export class ExpensesFilters extends React.Component{
    state = {
        focusedInput: undefined
    }

    setSortByDate = () => {
        this.props.setSortByDate();
    }

    setSortByAmount = () => {
        this.props.setSortByAmount();
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    setTextFilter = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {      
        switch (e.target.value) {
            case "date": {
                this.setSortByDate();
                break;
            }
            case "amount":{
                this.setSortByAmount();
                break;
            }
        }
    }
    
    render() {
        
        return  ( <div>        
            
            <input type="text" placeholder="Text filter" value={this.props.filter.text} onChange={this.setTextFilter}/>
            
            <select
                value={this.props.filter.sortBy}
                onChange={this.onSortChange}>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            
            </select>
            
            <DateRangePicker
                startDate={this.props.filter.startDate}
                startDateId="startDate"
                endDate={this.props.filter.endDate}
                endDateId="endDate"
                onDatesChange={
                    this.onDatesChange
                }
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                isOutsideRange={() => false}
                showClearDates={true}
                numberOfMonths = {1}
        />
            </div>)
            }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter    
    }
};

const mapDispatchToProps = (dispatch) => ({
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setSortByAmount: () => dispatch(setSortByAmount()),
    setSortByDate: () => dispatch(setSortByDate()),
    setTextFilter: (text) => dispatch(setTextFilter(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilters);

