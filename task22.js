const getMajorityElement = (nums = [2, 2, 1, 1, 1, 2, 2]) => {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		const el = nums[i];

		if (map[el]) {
			map[el]++;
		} else {
			map[el] = 1;
		}
	}
	return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(getMajorityElement());
