const debounce = (func, delay) => {
	let timeout;

	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
};

const sayHi = () => {
	console.log('Hello!');
};

const debouncedData = debounce(sayHi, 1000);

//console.log(debouncedData());

function compose(...functions) {
	return function (firstArg) {
		return functions.reduceRight((res, func) => func(res), firstArg);
	};
}

function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}
