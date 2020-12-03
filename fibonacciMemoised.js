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

// Tests

console.log(fibonacci(33));
console.log('This non-memoised calculations took', calculations1, 'calculations.');

let fibMemo = fibonacciMemoised();
console.log(fibMemo(33));
console.log(fibMemo(33));
console.log('This memoised calculations took', calculations2, 'calculations.');