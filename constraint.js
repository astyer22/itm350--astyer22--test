// constraint.js

function registerUser(username, password, email) {
    // Validate username
    if (username.length < 3 || username.length > 20) {
        throw new Error("Username must be between 3 and 20 characters long");
    }

    // Validate password
    if (password.length < 8 || !/\d/.test(password)) {
        throw new Error("Password must be at least 8 characters long and contain at least one digit");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Email must be a valid email format");
    }

    // Return user data
    return {
        username,
        email
    };
}

module.exports = registerUser;
