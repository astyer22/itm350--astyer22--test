// serviceSimulation.js
class UserService {
    constructor(userDatabase) {
        this.userDatabase = userDatabase;
    }

    registerUser(username) {
        if (!username) {
            throw new Error("Username is required");
        }
        return this.userDatabase.addUser(username);
    }

    getUser(username) {
        return this.userDatabase.getUser(username);
    }
}

module.exports = UserService;
