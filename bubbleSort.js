// Create a bubble sort algorithm.

function bubbleSort(array) {
    const sortedArray = array;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            };
        };
    };

    return sortedArray;
};

// Tests

bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);