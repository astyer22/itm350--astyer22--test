class DataProcessor {
    constructor() {
        this.data = [];
    }

    processData(inputData) {
        return new Promise((resolve, reject) => {
            try {
                inputData.forEach(item => {
                    this.data.push(item);
                });
                resolve('Data processed successfully');
            } catch (error) {
                reject('Error processing data');
            }
        });
    }

    getData() {
        return this.data;
    }
}

module.exports = DataProcessor;
