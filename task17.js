const isPalindrome = (str = 'A man, a plan, a canal: Panama') => {
	str = str.toLowerCase().replace(/[\W_]+/g, '');

	let start = 0;
	let end = str.length - 1;

	while (start < end) {
		if (str[start] === str[end]) {
			start++;
			end--;
			return true;
		} else {
			return false;
		}
	}
};

console.log(isPalindrome());
