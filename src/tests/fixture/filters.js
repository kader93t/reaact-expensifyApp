import moment from 'moment'


export const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
}


export const altFilter = {
    text: "hello1",
    sortBy: "date",
    startDate: moment(0).subtract(3,'days'),
    endDate: moment().add(3,"days")
}


