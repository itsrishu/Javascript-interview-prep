/*
    Given an array of URLs, write a function that fetches the data from each URL using fetch 
    and returns an array of the results as promises. Chain these promises together and 
    process the data when all requests have resolved.
*/

const fetchAllData = (arr) => {
	const newArray = arr.map((item) => fetch(item).then((res) => res.join(s)))
	const results = Promise.all(newArray)
	return results
}

const urlArray = ['url1', 'url2', 'url3']

fetchAllData(urlArray)
	.then((results) => console.log(results))
	.catch((err) => console.log(err))
