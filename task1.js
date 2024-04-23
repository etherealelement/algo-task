let worker = {
	someMethod() {
		return 1;
	},

	slow(x) {
		console.log('Called with ' + x);
		return x * this.someMethod(); // (*)
	},
};

const cachingDecorator = func => {
	let cache = new Map();

	return function (x) {
		if (cache.has(x)) {
			return cache.get(x);
		}
		let result = func.call(this, x);
		cache.set(x, result);
		return result;
	};
};

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(1));
