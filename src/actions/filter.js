// setFilter Action 

export const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT",
        text
    }
}

export const setSortByDate = () => {
    return {
        type: "SORT_BY",
        sortBy: {
            sortBy: "date"
        }
    }
}

export const setSortByAmount = () => {
    return {
        type: "SORT_BY",
        sortBy: {
            sortBy: "amount"
        }
    }
}

export const setStartDate = (startDate) => {
    return {
        type: "SET_START_DATE", 
        startDate
    }
}

export const setEndDate = (endDate) => {
    return {
        type: "SET_END_DATE",
        endDate
    }
}