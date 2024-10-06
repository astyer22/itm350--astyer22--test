// signalled.test.js
const SignalledOperation = require('../signalled');

describe('SignalledOperation', () => {
    let operation;

    beforeEach(() => {
        operation = new SignalledOperation();
    });

    test('should not be completed initially', () => {
        expect(operation.isCompleted()).toBe(false);
    });

    test('should be completed after execution', (done) => {
        operation.execute(() => {
            expect(operation.isCompleted()).toBe(true);
            done(); // Signal Jest to proceed with the test after the callback
        });
    });

    test('should execute callback after completion', (done) => {
        const mockCallback = jest.fn();
        operation.execute(mockCallback);

        setTimeout(() => {
            expect(mockCallback).toHaveBeenCalled();
            done(); // Signal Jest to proceed with the test
        }, 1100); // Wait slightly longer than the operation to ensure completion
    });
});
