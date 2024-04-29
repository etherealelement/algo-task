let slow = x => {
	console.log(x);
	return x;
};

const cachingDecorator = func => {
	const cache = new Map();

	return function (...x) {
		if (cache.has(x)) {
			return cache.get(x);
		}
		const result = func(...x);
		cache.set(x, result);
	};
};

slow = cachingDecorator(slow);
console.log(slow(1));
