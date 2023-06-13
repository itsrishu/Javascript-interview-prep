/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.  

*/

function ifValidParanthesis(str) {
	let stack = []
	let pairs = {
		'(': ')',
		'{': '}',
		'[': ']',
	}

	for (let i = 0; i < str.length; i++) {
		let char = str[i]
		if (pairs[char]) {
			stack.push(char)
		} else {
			if (stack.length === 0 || pairs[stack.pop()] !== char) {
				return false
			}
		}
	}

	return stack.length === 0
}

console.log(ifValidParanthesis('{](](])'))
