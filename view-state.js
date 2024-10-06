// view-state.js

class ViewState {
    constructor() {
      this.state = {};
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
    }
  
    getState() {
      return this.state;
    }
  }
  
  module.exports = ViewState;
  