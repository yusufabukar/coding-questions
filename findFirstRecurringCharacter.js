// Return the first recurring character in an array using a hash table.
// Given an array = [2,5,1,2,3,5,1,2,4], it should return 2
// Given an array = [2,1,1,2,3,5,1,2,4], it should return 1
// Given an array = [2,3,4,5], it should return undefined
// Bonus: What if we had this: [2,5,5,2,3,5,1,2,4]. It should return 5 because the pairs are before 2,2

// My Solution
function firstRecurringCharacter(array) {
    // Can't be bothered to do input validation at 1:52am...

    let seenCharacters = {}

    for (let character of array) {
        if (!seenCharacters[character]) {
            seenCharacters[character] = true;
        } else {
            return character;
        };
    };

    return undefined;
};

// Other Solutions

function firstRecurringCharacter2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) { // Making sure i !== j or false positive will arise. Also no need to check j < i since already checked.
            if (array[i] === array[j]) {
                return array[i];
            };
        };
    };

    return undefined;
};

function firstRecurringCharacter3(array) {
    let map = {};

    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            return array[i];
        } else {
            map[array[i]] == true; // If not true, if statement may return falsy
        };
    };

    return undefined;
};

// Tests

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 3, 4, 5]);
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter2([2, 3, 4, 5]);
firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);

firstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter3([2, 3, 4, 5]);
firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4]);