class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    // Simulates a complex calculation
    calculateHeavyOperation() {
        let result = 0;
        for (let i = 0; i < 1e6; i++) {
            result += i;
        }
        return result;
    }
}

module.exports = Calculator; // Export the Calculator class
