// Rollback.test.js
const User = require('../rollback');

beforeEach(() => {
    User.clear(); // Reset the in-memory database before each test
});

describe('User Model', () => {
    test('should create a user', () => {
        const user = User.create('John Doe');
        expect(User.getAll()).toEqual([user]);
    });

    test('should delete a user', () => {
        const user = User.create('Jane Doe');
        User.delete(user.id);
        expect(User.getAll()).toEqual([]);
    });

    test('should not affect other tests', () => {
        User.create('Alice');
        expect(User.getAll()).toHaveLength(1); // Ensure it doesn't affect other tests
    });
});
