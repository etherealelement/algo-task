const getSingleNumber = (nums = [4, 1, 2, 1, 2]) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];

		if (map.has(element)) {
			map.set(element, map.get(element) + 1);
		} else {
			map.set(element, 1);
		}
	}

	return Array.from(map.entries()).find(([key, value]) => value === 1)[0];
};

console.log(getSingleNumber());
