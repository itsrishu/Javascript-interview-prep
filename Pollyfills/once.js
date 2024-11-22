/*
    Write a once function that ensures a function can only be called once. 
    Subsequent calls should return the result from the first call.
*/

function onlyOnce(cb) {
	let called = false
	let res

	return (...args) => {
		if (!called) {
			res = cb(...args)
			called = true
		}
		return res
	}
}
