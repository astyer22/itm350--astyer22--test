// componentSimulation.js
class Component {
    constructor(name) {
        this.name = name;
    }

    performAction() {
        return `Action performed by ${this.name}`;
    }
}

class ComponentSimulator {
    constructor(component) {
        this.component = component;
    }

    simulateAction() {
        return this.component.performAction();
    }
}

module.exports = { Component, ComponentSimulator };
