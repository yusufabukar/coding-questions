// Create a function that merges 2 sorted arrays.

// My Solution
const mergeSortedArrays = (array1, array2) => array1.concat([...array2]).sort((a, b) => a - b); // From W3C: since the sort() method sorts strings, you can sort numbers by providing a compare function (negative: a before b, zero: no change, positive: b before a). For descending sort, return b - a.

// Other Solution

function mergeSortedArrays2(array1, array2) {
    // Check for empty inputs
    if (array1.length === 0) {return array2};
    if (array2.length === 0) {return array1};

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1; let j = 1;

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        };
    };

    return mergedArray;
};

// Tests

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]);