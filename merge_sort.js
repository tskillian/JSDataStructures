var input = [3,2];

var mergeSort = function(array) {
	// base case
	if (array.length < 2) return array;

	// Split array into two equal sized chunks
	var mid = Math.floor(array.length/2),
		left = array.slice(0, mid),
		right = array.slice(mid);

	// Sort each chunk using merge sort
	var leftSorted = mergeSort(left),
		rightSorted = mergeSort(right);

	// Combine the chucks back into a single array and return it
	var sortedResult = [];
	while (leftSorted.length > 0 || rightSorted.length > 0) {
		if(leftSorted.length === 0) {
			Array.prototype.splice.apply(sortedResult, [sortedResult.length, 0].concat(rightSorted));
			break;
		}

		else if (rightSorted.length === 0) {
			Array.prototype.splice.apply(sortedResult, [sortedResult.length, 0].concat(leftSorted));
			break;
		} else {

			var elem = (leftSorted[0] < rightSorted[0]) ? leftSorted.shift() : rightSorted.shift();
			sortedResult = sortedResult.concat(elem);
		}

	}

	return sortedResult;

};

console.log(mergeSort(input));