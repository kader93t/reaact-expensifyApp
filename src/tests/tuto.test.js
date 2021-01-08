

const multiply = (a, b) => {
    return a * b;
}

test('multiplication should equal 8 ', () => {
    expect(multiply(2,4)).toBe(8);
})
