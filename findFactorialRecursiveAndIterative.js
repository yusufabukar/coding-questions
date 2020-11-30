// Write two functions, one recursive and the other iterative, that calculate the factorial.

function findFactorialRecursive(number) {
    if (number === 2) {return 2};

    return number * findFactorialRecursive(number - 1);
};

function findFactorialIterative(number) {
    let answer = 1;

    for (let i = number; i >= 1; i--) {
        answer *= i;
    };

    return answer;
};

// Tests

findFactorialIterative(7);
findFactorialRecursive(7);
