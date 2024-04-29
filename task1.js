// 1;
function spy(func) {
	function wrapper(...args) {
		wrapper.calls.push(args);
		return func.apply(this, args);
	}
	wrapper.calls = [];

	return wrapper;
}
// 2;
function f(x) {
	console.log(x);
}

function delay(func, ms) {
	return function (...x) {
		setTimeout(() => {
			func.apply(this, x);
		}, ms);
	};
}

let f1000 = delay(f, 2000);
f1000('1000');
