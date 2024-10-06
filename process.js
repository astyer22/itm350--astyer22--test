class TaskRunner {
    constructor() {
        this.tasks = []; // Array to hold tasks
    }

    // Method to add a task
    addTask(task) {
        this.tasks.push(task);
    }

    // Method to run all tasks in sequence
    runTasks() {
        console.log('Starting task execution...');
        this.tasks.forEach((task, index) => {
            console.log(`Running task ${index + 1}: ${task.name}`);
            task.execute(); // Execute each task
        });
        console.log('All tasks executed.');
    }
}

module.exports = TaskRunner; // Export the TaskRunner class
