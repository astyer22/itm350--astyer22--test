const ResourceIntensiveTask = require('../resource-stress.js'); // Add the .js extension

describe('Resource Stress Test', () => {
    let task;
    
    beforeEach(() => {
        task = new ResourceIntensiveTask();
    });

    afterEach(() => {
        task.clearData(); // Clean up after each test to avoid memory issues
    });

    test('should handle high memory usage without errors', () => {
        const result = task.performTask(100000); // Simulate adding 100,000 objects
        expect(result).toBe(100000);  // Verify that 100,000 objects were added
    });

    test('should maintain data integrity under stress', () => {
        task.performTask(50000); // Add 50,000 objects
        expect(task.getDataSize()).toBe(50000); // Ensure 50,000 objects were added correctly
    });

    test('should not crash under extreme resource usage', () => {
        // Add a massive number of objects and ensure the system doesn't crash
        expect(() => task.performTask(1000000)).not.toThrow(); 
    });
});
