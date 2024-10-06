// signalled.js
class SignalledOperation {
    constructor() {
        this.completed = false;
        this.callback = null;
    }

    execute(callback) {
        this.callback = callback;
        // Simulate an asynchronous operation
        setTimeout(() => {
            this.completed = true;
            if (this.callback) {
                this.callback();
            }
        }, 1000); // 1 second delay
    }

    isCompleted() {
        return this.completed;
    }
}

module.exports = SignalledOperation;
