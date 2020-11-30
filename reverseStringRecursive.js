// Implement a function that reverses a string using iteration...and then recursion!

const reverseStringIterative = string => string.split('').reverse().join('');

const reverseStringRecursive = string => string === '' ? '' : reverseStringRecursive(string.substr(1)) + string.charAt(0);

// Tests

reverseStringIterative('This is not a palindrome!');
reverseStringRecursive('This is not a palindrome!');