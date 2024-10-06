const TaskRunner = require('../process');

describe('TaskRunner', () => {
    let runner;

    beforeEach(() => {
        runner = new TaskRunner(); // Initialize a new TaskRunner for each test
    });

    test('should add tasks correctly', () => {
        const task1 = {
            name: 'Task 1',
            execute: jest.fn() // Mocking the execute function
        };

        runner.addTask(task1);
        expect(runner.tasks).toHaveLength(1);
        expect(runner.tasks[0].name).toBe('Task 1');
    });

    test('should run all added tasks', () => {
        const task1 = {
            name: 'Task 1',
            execute: jest.fn()
        };
        const task2 = {
            name: 'Task 2',
            execute: jest.fn()
        };

        runner.addTask(task1);
        runner.addTask(task2);
        runner.runTasks();

        expect(task1.execute).toHaveBeenCalled(); // Check if task1's execute was called
        expect(task2.execute).toHaveBeenCalled(); // Check if task2's execute was called
    });

    test('should log execution messages', () => {
        console.log = jest.fn(); // Mock console.log

        const task1 = {
            name: 'Task 1',
            execute: jest.fn()
        };

        runner.addTask(task1);
        runner.runTasks();

        expect(console.log).toHaveBeenCalledWith('Starting task execution...');
        expect(console.log).toHaveBeenCalledWith('Running task 1: Task 1');
        expect(console.log).toHaveBeenCalledWith('All tasks executed.');
    });
});
