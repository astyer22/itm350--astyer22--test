const Order = require('../processState');

describe('Order', () => {
    let order;

    beforeEach(() => {
        order = new Order(); // Initialize a new Order instance for each test
    });

    test('should complete the order from created state', () => {
        order.complete();
        expect(order.getState()).toBe('completed');
    });

    test('should not complete the order if already completed', () => {
        order.complete(); // Complete first
        order.complete(); // Try to complete again
        expect(order.getState()).toBe('completed'); // State should remain 'completed'
    });
});
