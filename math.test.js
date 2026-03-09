//having .test.js extension is important for jest to recognize it as a test file
//The operation should return the sum of two numbers
// const { addition } = require('./addition'); 
const { addition } = require('./addition'); 

test('2 + 3 = 5', () => {
    expect(addition(2, 3)).toBe(5);
});

test('0 + 0 = 0', () => {
    expect(addition(0, 0)).toBe(0);
});

test('-1 + -1 = -2', () => {
    expect(addition(-1, -1)).toBe(-2);
});

test.skip('2.5 + 3.5 = 6', () => {
    expect(addition(2.5, 3.5)).toBe(6);
});