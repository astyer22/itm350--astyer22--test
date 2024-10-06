// loading-test.js

class DataLoader {
    constructor() {
      this.loading = false;
      this.data = null;
    }
  
    async fetchData() {
      this.loading = true;
      // Simulating a network request with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.data = { message: 'Data fetched successfully!' };
      this.loading = false;
    }
  
    isLoading() {
      return this.loading;
    }
  
    getData() {
      return this.data;
    }
  }
  
  module.exports = DataLoader;
  