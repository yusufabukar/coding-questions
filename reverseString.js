// Implement a function that reverses a string using iteration...and then recursion!

function reverseString(string) {
	let stringArray = string.split('');
	let reverseArray = [];

	for (let i = stringArray.length - 1; i >= 0; i--) {
		reverseArray.push(stringArray[i]);
	};

	return reverseArray.join('');
};

const reverseStringIterative = string => string.split('').reverse().join('');

const reverseStringRecursive = string => string === '' ? '' : reverseStringRecursive(string.substr(1)) + string.charAt(0);

// Other Solutions

function reverseString2(string) {
	if (!string || typeof string != 'string' || string.length < 2) {
		return string;
	};

	const reverseArray = [];

	for (let i = string.length - 1; i >= 0; i--) {
		reverseArray.push(string[i]) // You can access string indices like arrays
	}

	return reverseArray.join('');
};

function reverseString3(string) {
	return string.split('').reverse().join(''); // Array.reverse() method removes need for for loop
};

const reverseString4 = string => [...string].reverse().join(''); // [...string] spread operator

// Tests

reverseString('This is not a palindrome.');
reverseStringIterative('This is not a palindrome.');
reverseStringRecursive('This is not a palindrome.');
reverseString2('This is not a palindrome.');
reverseString3('This is not a palindrome.');
reverseString4('This is not a palindrome.');
