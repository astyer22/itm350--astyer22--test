class ResourceIntensiveTask {
    constructor() {
        this.data = [];
    }

    performTask(count) {
        for (let i = 0; i < count; i++) {
            // Simulate resource usage by adding large objects
            this.data.push({ index: i, data: 'x'.repeat(10000) });
        }
        return this.data.length;
    }

    getDataSize() {
        return this.data.length;
    }

    clearData() {
        this.data = []; // Clear the data to free memory
    }
}

module.exports = ResourceIntensiveTask;
