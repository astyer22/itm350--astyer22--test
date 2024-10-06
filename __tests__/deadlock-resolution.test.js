// deadlock-resolution.test.js
const { Resource, DeadlockResolver } = require('../deadlock-resolution');

describe('DeadlockResolver', () => {
    let resourceA, resourceB, resolver;

    beforeEach(() => {
        resourceA = new Resource('ResourceA');
        resourceB = new Resource('ResourceB');
        resolver = new DeadlockResolver(resourceA, resourceB);
    });

    test('should resolve deadlock when resources are locked in reverse order', async () => {
        // Lock resources in reverse order to simulate a deadlock
        await resourceB.lock();
        await resolver.executeWithDeadlockResolution();

        // Ensure that deadlock resolution was performed
        expect(resourceA.locked).toBe(false);
        expect(resourceB.locked).toBe(false);
    });

    test('should complete without deadlock when resources are available', async () => {
        await resolver.executeWithDeadlockResolution();

        // Ensure that no deadlock occurred and both resources were unlocked
        expect(resourceA.locked).toBe(false);
        expect(resourceB.locked).toBe(false);
    });
});
