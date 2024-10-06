class Order {
    constructor() {
        this.state = 'created'; // Initial state
    }

    complete() {
        if (this.state === 'created') {
            this.state = 'completed'; // Transition to completed
            console.log('Order is completed.');
        } else {
            console.log('Order is already completed.');
        }
    }

    getState() {
        return this.state; // Return current state
    }
}

module.exports = Order; // Export the Order class
