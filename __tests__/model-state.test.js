// __tests__/model-state.test.js

const Model = require('../model-state');

describe('Model State Tests', () => {
  let model;

  beforeEach(() => {
    model = new Model();
  });

  test('should start with an empty state', () => {
    expect(model.getState()).toEqual({});
  });

  test('should update the state correctly', () => {
    model.setState({ name: 'Alice' });
    expect(model.getState()).toEqual({ name: 'Alice' });

    model.setState({ age: 30 });
    expect(model.getState()).toEqual({ name: 'Alice', age: 30 });
  });

  test('should merge new state with existing state', () => {
    model.setState({ name: 'Alice' });
    model.setState({ age: 30 });
    model.setState({ name: 'Bob' }); // Update name

    expect(model.getState()).toEqual({ name: 'Bob', age: 30 });
  });
});
