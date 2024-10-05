const multiply = require('../multiply.js');

test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});