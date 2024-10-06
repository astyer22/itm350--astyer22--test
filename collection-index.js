// collection-index.js

class PhoneBook {
    constructor() {
        this.contacts = {};
    }

    addContact(name, phoneNumber) {
        this.contacts[name.toLowerCase()] = phoneNumber; // Store phone number with lowercase name
    }

    getPhoneByName(name) {
        return this.contacts[name.toLowerCase()] || null; // Retrieve phone number or return null if not found
    }
}

module.exports = PhoneBook; // Export the PhoneBook class
