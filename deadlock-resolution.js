// deadlock-resolution.js
class Resource {
    constructor(name) {
        this.name = name;
        this.locked = false;
    }

    async lock() {
        return new Promise((resolve, reject) => {
            if (!this.locked) {
                this.locked = true;
                console.log(`${this.name} is locked`);
                resolve();
            } else {
                reject(`${this.name} is already locked`);
            }
        });
    }

    unlock() {
        this.locked = false;
        console.log(`${this.name} is unlocked`);
    }
}

class DeadlockResolver {
    constructor(resourceA, resourceB) {
        this.resourceA = resourceA;
        this.resourceB = resourceB;
    }

    async executeWithDeadlockResolution() {
        try {
            await this.resourceA.lock();
            // Simulate waiting for another resource
            await this.resourceB.lock();

            // Do some work
            console.log('Both resources locked, doing work...');

            // Release resources after work
            this.resourceB.unlock();
            this.resourceA.unlock();
        } catch (error) {
            console.error('Deadlock detected, resolving...');
            this.resolveDeadlock();
        }
    }

    resolveDeadlock() {
        // Resolve deadlock by unlocking any locked resources
        this.resourceA.unlock();
        this.resourceB.unlock();
        console.log('Deadlock resolved');
    }
}

module.exports = { Resource, DeadlockResolver };
