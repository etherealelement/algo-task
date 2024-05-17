const getMaxProfit = (prices = [0]) => {
	let max = 0;
	let current = prices[0];

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < current) {
			current = prices[i];
		}
		if (prices[i] - current > max) {
			max = prices[i] - current;
		}
	}
	return max;
};

console.log(getMaxProfit());
