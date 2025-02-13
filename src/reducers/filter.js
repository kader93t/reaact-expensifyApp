import moment from "moment"
const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
    focusedInput: undefined
}

export default (state = filterDefaultState, action) => {

    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY":
            return {
                ...state,
                ...action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
    
}
