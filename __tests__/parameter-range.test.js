// __tests__/parameter-range.test.js

const squareRoot = require('../parameter-range.js');

describe('findSquareRoots', () => {
    // Test cases for valid inputs
    test.each([
        { input: 0, expected: 0 },
        { input: 9, expected: 3 },
        { input: -1, expected: 'invaild can not find square root of negative number' },
        { input: 25, expected: 5 },
        { input: 100, expected: 10 },
    ])('returns the square root of a number', ({ input, expected }) => {
        expect(squareRoot(input)).toBe(expected);
    });

    // Test case for negative input
    test('returns an error message for negative numbers', () => {
        const negativeInput = -1;
        const expectedOutput = 'invaild can not find square root of negative number';
        expect(squareRoot(negativeInput)).toBe(expectedOutput);
    });
});
