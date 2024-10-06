class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    canVote() {
        return this.age >= 18; // Rule: User can vote if age is 18 or older
    }

    canDrinkAlcohol() {
        return this.age >= 21; // Rule: User can drink alcohol if age is 21 or older
    }
}

module.exports = User; // Export the User class
