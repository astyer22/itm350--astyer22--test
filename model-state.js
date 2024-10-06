// model-state.js

class Model {
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
  
  module.exports = Model;
  