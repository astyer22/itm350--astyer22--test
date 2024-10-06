// mockObject.js
class UserService {
    constructor(userDatabase) {
        this.userDatabase = userDatabase;
    }

    addUser(username) {
        if (!username) {
            throw new Error("Username is required");
        }
        return this.userDatabase.add(username);
    }

    getUser(username) {
        return this.userDatabase.find(username);
    }
}

module.exports = UserService;
