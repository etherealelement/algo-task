const getLengthOfLongestSubstring = str => {
	if (str.length <= 0) return 0;

	let max = 0;
	let substring = '';

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (substring.includes(char)) {
			const index = substring.indexOf(char);
			substring = substring.slice(index + 1);
		}
		substring += char;
		max = Math.max(max, substring.length);
	}

	return max;
};

console.log(getLengthOfLongestSubstring('abcabcbb')); // 3
console.log(getLengthOfLongestSubstring('bbbbb')); // 1
console.log(getLengthOfLongestSubstring('pwwkew')); // 3
