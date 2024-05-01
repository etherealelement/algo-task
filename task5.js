const generateParenthesis = n => {
	let stack = [];
	function backtrack(S = '', left = 0, right = 0) {
		if (S.length === 2 * n) {
			stack.push(S);
		}
		if (left < n) {
			backtrack(S + '(', left + 1, right);
		}
		if (right < left) {
			backtrack(S + ')', left, right + 1);
		}
	}
	backtrack();
	return stack;
};

console.log(generateParenthesis(3));
