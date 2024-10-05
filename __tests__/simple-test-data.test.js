// __test__/simple-test-data.test.js

const area = require('../simple-test-data.js');

describe('calculateArea', () => {
    test.each([
        {length: 0, width: 0, expected: 0},
        {length: -1, width: 5, expected: "invaild can not find area of negative number"},
        {length: 6, width: 4, expected: 24},
        {length:10, width:-2, expected: "invaild can not find area of negative number"},
    ])(`returns the area of a rectangle`, ({length, width, expected}) => {
        expect(area(length, width)).toBe(expected);
    });
});