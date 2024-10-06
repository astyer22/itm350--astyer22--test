// __tests__/loading-test.test.js

const DataLoader = require('../loading-test');

describe('DataLoader Tests', () => {
  let dataLoader;

  beforeEach(() => {
    dataLoader = new DataLoader();
  });

  test('should start with loading false and data null', () => {
    expect(dataLoader.isLoading()).toBe(false);
    expect(dataLoader.getData()).toBeNull();
  });

  test('should set loading to true when fetching data', async () => {
    const fetchDataPromise = dataLoader.fetchData();
    expect(dataLoader.isLoading()).toBe(true);
    await fetchDataPromise; // Wait for the fetch to complete
  });

  test('should fetch data successfully', async () => {
    await dataLoader.fetchData();
    expect(dataLoader.isLoading()).toBe(false);
    expect(dataLoader.getData()).toEqual({ message: 'Data fetched successfully!' });
  });
});
