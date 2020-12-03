// Dynamically program a Fibonacci calculator.

let calculations1 = 0;
function fibonacci(n) {
    calculations1++;
    if (n < 2) {return n};

    return fibonacci(n - 1) + fibonacci(n - 2);
};

let calculations2 = 0;
function fibonacciMemoised() {
    let cache = {};

    return function memoised(n) {
        calculations2++;

        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = memoised(n - 1) + memoised(n - 2);
                return cache[n];
            };
        };
    };
};

let calculations3 = 0;
function fibonacciBottomUp(n) {
    let answer = [0, 1];

    for (let i = 2; i <= n; i++) {
        calculations3++;
        answer.push(answer[i - 2] + answer[i - 1]);
    };

    return answer.pop();
};

// Tests

console.log('Recursive:', fibonacci(33));
console.log('This recursive calculation took', calculations1, 'calculations.');

let fibMemo = fibonacciMemoised();
console.log('Memoised:', fibMemo(33));
console.log('This memoised calculation took', calculations2, 'calculations.');

console.log('Bottom-Up:',fibonacciBottomUp(33));
console.log('This bottom-up calculation took', calculations3, 'calculations.');
