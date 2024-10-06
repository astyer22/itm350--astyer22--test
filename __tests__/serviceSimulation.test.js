// serviceSimulation.test.js
const UserService = require('../serviceSimulation');

describe('UserService', () => {
    let userDatabaseMock;
    let userService;

    beforeEach(() => {
        userDatabaseMock = {
            addUser: jest.fn(),
            getUser: jest.fn(),
        };
        userService = new UserService(userDatabaseMock);
    });

    test('should register a user successfully', () => {
        userService.registerUser('testuser');
        expect(userDatabaseMock.addUser).toHaveBeenCalledWith('testuser');
    });

    test('should throw an error when registering a user without a username', () => {
        expect(() => userService.registerUser()).toThrow("Username is required");
    });

    test('should get a user successfully', () => {
        userDatabaseMock.getUser.mockReturnValue({ username: 'testuser' });
        const user = userService.getUser('testuser');
        expect(user).toEqual({ username: 'testuser' });
        expect(userDatabaseMock.getUser).toHaveBeenCalledWith('testuser');
    });
});
