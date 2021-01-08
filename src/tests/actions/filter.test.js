import { setEndDate, setStartDate, setTextFilter, setSortByAmount, setSortByDate } from "./../../actions/filter"

test("should Set the end date ", () => {
    const endDate = setEndDate(1234);
    expect(endDate).toEqual({
        type: "SET_END_DATE",
        endDate: 1234
    });
});

test("should set the start date ", () => {
    const startDate = setStartDate(1234);
    expect(startDate).toEqual({
        type: "SET_START_DATE",
        startDate: 1234
    });
});

test('should set Text Filter', () => {
    const textFilter = setTextFilter("text filter");
    expect(textFilter).toEqual({
        type: "SET_TEXT",
        text: "text filter"
    });
});

test("should set sort by amount", () => {
    const SortByAmount = setSortByAmount();
    expect(SortByAmount).toEqual({
        type: "SORT_BY",
        sortBy:{sortBy:"amount"}
    });
});

test("should set sort by date", () => {
    const SortByDate = setSortByDate();
    expect(SortByDate).toEqual({
        type: "SORT_BY",
        sortBy:{sortBy: "date"}
    });
});
