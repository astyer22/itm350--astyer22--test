// bitErrorSimulation.test.js
const DataTransmitter = require('../bitErrorSimulation');

describe('DataTransmitter', () => {
    let transmitter;

    beforeEach(() => {
        transmitter = new DataTransmitter();
    });

    test('should send data without errors', () => {
        const data = '101010';
        const result = transmitter.send(data);
        expect(result).toBe(data);
    });

    test('should simulate a bit error', () => {
        const data = '101010';
        
        // Mock the random function to force a bit error
        jest.spyOn(Math, 'random').mockReturnValue(0); // Simulate a 10% chance

        const result = transmitter.send(data);
        expect(result).not.toBe(data); // The result should have a bit flipped
        expect(result).toMatch(/^[01]{6}$/); // Ensure the result is still valid binary data
    });

    afterEach(() => {
        jest.restoreAllMocks(); // Restore the original random function
    });
});
