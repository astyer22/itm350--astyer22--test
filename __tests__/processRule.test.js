const User = require('../processRule');

describe('User Process Rules', () => {
    test('should allow voting if age is 18 or older', () => {
        const user1 = new User('Alice', 20);
        const user2 = new User('Bob', 17);
        
        expect(user1.canVote()).toBe(true); // Alice can vote
        expect(user2.canVote()).toBe(false); // Bob cannot vote
    });

    test('should allow drinking alcohol if age is 21 or older', () => {
        const user1 = new User('Charlie', 22);
        const user2 = new User('Dave', 19);

        expect(user1.canDrinkAlcohol()).toBe(true); // Charlie can drink alcohol
        expect(user2.canDrinkAlcohol()).toBe(false); // Dave cannot drink alcohol
    });
});
