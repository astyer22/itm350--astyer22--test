// Rollback.js
const users = []; // Simulated in-memory database

const User = {
    create: (name) => {
        const user = { id: users.length + 1, name };
        users.push(user);
        return user;
    },
    delete: (id) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
        }
    },
    getAll: () => {
        return users;
    },
    clear: () => {
        users.length = 0; // Reset the in-memory database
    }
};

module.exports = User;
