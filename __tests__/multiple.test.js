// Test: multiply 2 * 3 to equal 6
const multiply = require('../multiply.js');
// Outcome: Pass
test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});