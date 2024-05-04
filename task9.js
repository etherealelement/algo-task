var searchMatrix = function (matrix, target) {
	const clearMatrix = matrix.flat();
	let start = 0;
	let end = clearMatrix.length - 1;
	let mid;

	while (start <= end) {
		mid = Math.floor((start + end) / 2);

		if (clearMatrix[mid] === target) {
			return true;
		} else if (clearMatrix[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return false;
};
console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		13
	)
);
