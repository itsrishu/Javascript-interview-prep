const s = [
	{ rank: 4 },
	{ rank: 8 },
	{ rank: 1 },
	{ rank: 9 },
	{ rank: 3 },
	{ rank: 6 },
	{ rank: 2 },
]

function mySort(arr) {
	let n = arr.length
	let swapped
	do {
		swapped = false
		for (let i = 0; i < n - 1; i++) {
			if (arr[i].rank > arr[i + 1].rank) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapped = true
			}
		}
	} while (swapped)
	return arr
}

function withInbuiltSwap(arr) {
	return arr.sort((a, b) => a.rank - b.rank)
}
