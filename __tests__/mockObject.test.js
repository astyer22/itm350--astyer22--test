// mockObject.test.js
const UserService = require('../mockObject');

describe('UserService', () => {
    let userDatabaseMock;
    let userService;

    beforeEach(() => {
        userDatabaseMock = {
            add: jest.fn(),
            find: jest.fn(),
        };
        userService = new UserService(userDatabaseMock);
    });

    test('should add a user successfully', () => {
        userService.addUser('testuser');
        expect(userDatabaseMock.add).toHaveBeenCalledWith('testuser');
    });

    test('should throw an error when adding a user without a username', () => {
        expect(() => userService.addUser()).toThrow("Username is required");
    });

    test('should get a user successfully', () => {
        userDatabaseMock.find.mockReturnValue({ username: 'testuser' });
        const user = userService.getUser('testuser');
        expect(user).toEqual({ username: 'testuser' });
        expect(userDatabaseMock.find).toHaveBeenCalledWith('testuser');
    });
});
