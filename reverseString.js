// Create a function that reverses a string.

// My Solution
function reverseString(string) {
	let stringArray = string.split('');
	let reverseArray = [];

	for (let i = stringArray.length - 1; i >= 0; i--) {
		reverseArray.push(stringArray[i]);
	};

	return reverseArray.join('');
};

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

function reverse3(string) {
	return string.split('').reverse().join(''); // Array.reverse() method removes need for for loop
};

const reverse4 = string => [...string].reverse.join(''); // [...string] spread operator

// Tests

reverse('This is not a palindrome.');
reverse2('This is not a palindrome.');
reverse3('This is not a palindrome.');
reverse4('This is not a palindrome.');
