const characterReplacement = (s, k) => {
	const hashMap = {};
	let longest = 0;
	let left = 0;
	let max = 0;
	for (let right = 0; right < s.length; right++) {
		hashMap[s[right]] = (hashMap[s[right]] || 0) + 1;
		max = Math.max(max, hashMap[s[right]]);
		if (right - left + 1 - max > k) {
			hashMap[s[left]]--;
			left++;
		}
		longest = Math.max(longest, right - left + 1);
	}
	return longest;
};

console.log(characterReplacement('AABABBA', 1));
