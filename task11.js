var findMin = function (nums) {
	return Math.min(...nums);
};

var findMinBinary = function (nums) {
	let low = 0;
	let hight = nums.length - 1;
	let mid;
	while (low <= hight) {
		mid = Math.floor((low + hight) / 2);

		if (nums[low] <= nums[hight]) {
			return nums[low];
		}
		if (nums[low] > nums[mid]) {
			hight = mid;
		} else {
			low = mid + 1;
		}
	}

	return [0];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMinBinary([3, 4, 5, 1, 2]));
