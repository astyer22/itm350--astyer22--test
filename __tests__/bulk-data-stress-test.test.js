const DataProcessor = require('../bulk-data-stress-test');

describe('Bulk Data Stress Test', () => {
    let processor;
    const bulkData = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

    beforeEach(() => {
        processor = new DataProcessor();
    });

    test('should process bulk data without errors', async () => {
        const result = await processor.processData(bulkData);
        expect(result).toBe('Data processed successfully');
        expect(processor.getData().length).toBe(100000);
    });

    test('should not lose data during bulk processing', async () => {
        await processor.processData(bulkData);
        const processedData = processor.getData();
        expect(processedData[0]).toBe('Item 1');
        expect(processedData[99999]).toBe('Item 100000');
    });
});
