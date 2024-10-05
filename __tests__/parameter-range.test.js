// __test__/parameter-range.test.js

const squareRoot = require('../parameter-range.js');

describe('findSquareRoots', () => {
   test.each([
    {input: 0, expected: 0},
    {input: -1, expected: 1},
    {input: 9, expected: 3},
    {input: 25, expected: 5},
    {input: 100, expected: 9},
   ])
    ('returns the square root of a number', ({input, expected}) => {
        expect(squareRoot(input)).toBe(expected);
    });

    test('returns an error message for negative numbers', () => {
        expect(squareRoot(-1)).toBe('invaild can not find square root of negative number');
    });
});