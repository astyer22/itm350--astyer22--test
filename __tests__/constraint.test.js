// constraint.test.js
const registerUser = require('../constraint'); // Adjust path based on your structure

describe('registerUser', () => {
    test('registers a user successfully with valid data', () => {
        expect(registerUser('testuser', 'password1', 'test@example.com')).toEqual({
            username: 'testuser',
            email: 'test@example.com'
        });
    });

    test('throws an error when username is too short', () => {
        expect(() => registerUser('ab', 'password1', 'test@example.com')).toThrow("Username must be between 3 and 20 characters long");
    });

    test('throws an error when username is too long', () => {
        expect(() => registerUser('a'.repeat(21), 'password1', 'test@example.com')).toThrow("Username must be between 3 and 20 characters long");
    });

    test('throws an error when password is too short', () => {
        expect(() => registerUser('testuser', 'short', 'test@example.com')).toThrow("Password must be at least 8 characters long and contain at least one digit");
    });

    test('throws an error when password does not contain a digit', () => {
        expect(() => registerUser('testuser', 'password', 'test@example.com')).toThrow("Password must be at least 8 characters long and contain at least one digit");
    });

    test('throws an error when email is invalid', () => {
        expect(() => registerUser('testuser', 'password1', 'invalid-email')).toThrow("Email must be a valid email format");
    });

    test('throws an error when email is empty', () => {
        expect(() => registerUser('testuser', 'password1', '')).toThrow("Email must be a valid email format");
    });
});
