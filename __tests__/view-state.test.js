// __tests__/view-state.test.js

const ViewState = require('../view-state');

describe('ViewState Tests', () => {
  let viewState;

  beforeEach(() => {
    viewState = new ViewState();
  });

  test('should initialize with an empty state', () => {
    expect(viewState.getState()).toEqual({});
  });

  test('should update state correctly', () => {
    viewState.setState({ user: 'John' });
    expect(viewState.getState()).toEqual({ user: 'John' });
  });

  test('should merge new state with existing state', () => {
    viewState.setState({ user: 'John' });
    viewState.setState({ age: 30 });
    expect(viewState.getState()).toEqual({ user: 'John', age: 30 });
  });

  test('should overwrite existing state properties', () => {
    viewState.setState({ user: 'John' });
    viewState.setState({ user: 'Doe' });
    expect(viewState.getState()).toEqual({ user: 'Doe' });
  });
});
