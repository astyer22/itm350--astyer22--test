// componentSimulation.test.js
const { Component, ComponentSimulator } = require('../componentSimulation');

describe('ComponentSimulator', () => {
    let simulator;

    beforeEach(() => {
        const component = new Component('TestComponent');
        simulator = new ComponentSimulator(component);
    });

    test('should simulate action of the component', () => {
        const result = simulator.simulateAction();
        expect(result).toBe('Action performed by TestComponent');
    });

    test('should handle different components', () => {
        const anotherComponent = new Component('AnotherComponent');
        const anotherSimulator = new ComponentSimulator(anotherComponent);
        const result = anotherSimulator.simulateAction();
        expect(result).toBe('Action performed by AnotherComponent');
    });
});
