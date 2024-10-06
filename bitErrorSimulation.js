// bitErrorSimulation.js
class DataTransmitter {
    constructor() {
        this.data = '';
    }

    send(data) {
        this.data = data;
        return this.simulateTransmission(data);
    }

    simulateTransmission(data) {
        // Simulate a 10% chance of a bit error
        if (Math.random() < 0.1) {
            return this.introduceBitError(data);
        }
        return data;
    }

    introduceBitError(data) {
        // Randomly flip one bit in the data
        const index = Math.floor(Math.random() * data.length);
        const bit = data[index] === '0' ? '1' : '0';
        return data.slice(0, index) + bit + data.slice(index + 1);
    }
}

module.exports = DataTransmitter;
