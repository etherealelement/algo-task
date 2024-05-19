const containsDuplicate = (arr = [1, 2, 3]) => {
	const map = new Map();

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (map.has(element)) {
			map.set(element, map.get(element) + 1);
		} else {
			map.set(element, 1);
		}
	}

	return Array.from(map).some(([key, value]) => value > 1);
};

console.log(containsDuplicate());
