const lengthOfLongestSubstring = s => {
	if (s.length <= 0) return 0;

	let max = 0;
	let start = 0;
	let end = 0;

	while (end < s.length) {
		if (isUnique(s.slice(start, end + 1))) {
			max = Math.max(max, end - start + 1);
			end++;
		} else {
			start++;
		}
	}

	function isUnique(str) {
		return new Set(str).size === str.length;
	}

	return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
