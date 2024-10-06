// __tests__/collection-index.test.js
const PhoneBook = require('../collection-index'); // Import the PhoneBook class

describe('PhoneBook', () => {
    let phoneBook;

    beforeEach(() => {
        phoneBook = new PhoneBook(); // Create a new phone book before each test
    });

    test('should add a contact and retrieve the phone number by name', () => {
        phoneBook.addContact('Alice', '123-456-7890');
        const phone = phoneBook.getPhoneByName('Alice');
        expect(phone).toBe('123-456-7890');
    });

    test('should return null for a non-existent contact', () => {
        const phone = phoneBook.getPhoneByName('Bob');
        expect(phone).toBeNull();
    });

    test('should retrieve the same phone number regardless of name case', () => {
        phoneBook.addContact('Charlie', '987-654-3210');
        const phone1 = phoneBook.getPhoneByName('charlie');
        const phone2 = phoneBook.getPhoneByName('CHARLIE');
        expect(phone1).toBe(phone2);
    });
});
