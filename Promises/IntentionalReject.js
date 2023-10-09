/*
    Create a promise that intentionally rejects with an error message. 
    Write code to handle the rejection and log the error.
*/

function handleRejection(intentioanReject) {
	return new Promise((resolve, reject) => {
		if (intentioanReject) {
			reject('Promise is rejected')
		} else {
			resolve('Promise resolved successfully')
		}
	})
}

console.log(
	handleRejection(true)
		.then((d) => console.log('d'))
		.catch((err) => console.log(err))
)
