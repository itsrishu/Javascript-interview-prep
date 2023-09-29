const reverseAnArrayWithExtraSpace = (arr) => {
	let result = []
	for (let i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i])
	}
	return result
}

console.log(reverseAnArray([2, 3, 4, 5, 6, 7, 8]))

const reverseAnArrayWithOutExtraSpace = (arr) => {
	for (let i = 0; i < Math.floor(arr.length - 1 / 2); i++) {
		let temp = arr[i]
		arr[i] = arr[arr.length - 1 - i]
		arr[arr.length - 1 - i] = temp
	}
	return arr
}

const reverseAStringWithExtraSpace = (str) => {
	let finalStr = ''
	for (let i = str.length - 1; i >= 0; i--) {
		finalStr = finalStr + str[i]
	}
	return finalStr
}

const reverseAStringWithoutExtraSpace = (str) => {
	const strArray = str.split('')
	for (let i = 0; i < Math.floor(strArray.length - 1 / 2); i++) {
		let temp = strArray[i]
		strArray[i] = strArray[strArray.length - 1 - i]
		strArray[strArray.length - 1 - i] = temp
	}
	console.log(strArray)
	return strArray.join('')
}

console.log(reverseAStringWithoutExtraSpace('mar'))
