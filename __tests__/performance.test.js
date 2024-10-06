const Calculator = require('../performance');

describe('Calculator Performance Tests', () => {
    let calculator;

    beforeAll(() => {
        calculator = new Calculator(); // Initialize a new Calculator instance
    });

    test('should perform addition in under 1 millisecond', () => {
        const start = performance.now(); // Start timing
        calculator.add(1000, 2000); // Perform addition
        const end = performance.now(); // End timing
        const duration = end - start; // Calculate duration
        expect(duration).toBeLessThan(1); // Expect duration to be less than 1 ms
    });

    test('should perform multiplication in under 1 millisecond', () => {
        const start = performance.now(); // Start timing
        calculator.multiply(1000, 2000); // Perform multiplication
        const end = performance.now(); // End timing
        const duration = end - start; // Calculate duration
        expect(duration).toBeLessThan(1); // Expect duration to be less than 1 ms
    });

    test('should perform heavy operation in under 200 milliseconds', () => {
        const start = performance.now(); // Start timing
        calculator.calculateHeavyOperation(); // Perform heavy operation
        const end = performance.now(); // End timing
        const duration = end - start; // Calculate duration
        expect(duration).toBeLessThan(200); // Expect duration to be less than 200 ms
    });
});
