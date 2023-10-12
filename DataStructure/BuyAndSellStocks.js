function maxProfitUnOptimised(prices) {
	let maxProfit = 0
	const n = prices.length

	for (let buy = 0; buy < n; buy++) {
		for (let sell = buy + 1; sell < n; sell++) {
			const profit = prices[sell] - prices[buy]
			if (profit > maxProfit) {
				maxProfit = profit
			}
		}
	}

	return maxProfit
}

function maxProfitOptimised(prices) {
	let maxProfit = 0
	let minPrice = Infinity

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i]
		} else if (prices[i] - minPrice > maxProfit) {
			maxProfit = prices[i] - minPrice
		}
	}

	return maxProfit
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4]
const maxProfitValue = maxProfit(prices)
console.log('Maximum profit:', maxProfitValue)
