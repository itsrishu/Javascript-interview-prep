//Problem Statement

/*  Two users access same product page which has editing options available on its various properties. 1st user edits the name and size
of the product while making and API call. 2nd user who has already opened the same product page comes back on the page 
a day later but sees the stale data. Now he edits the size of the same product. 

Now what communication has to be done to backend guy so that the user doesn't see a broken page?.

Note1: Backend sends the same json that it recieves as payload from the frontend .
Note2: Frontend efforts are not needed. 
Note3: Frontend dumps the entire product details while making the put / post request.
Note4: React-query / useSwr fetch on mount is not needed to fetch the latest data.
Note5: Error states and not needed while making the api call.

*/

//Solution

/*

When the first user edits the name and size of the product and makes an API call, 
the backend should check if the data being edited is the latest version. If the data is the latest version, 
the backend should allow the update to proceed and return a success response to the user.

However, if the data being edited is not the latest version, 
the backend should return a response indicating that the data has been modified since the user last viewed it. 
This response should prompt the user to refresh the page to get the latest version of the data.

A simple comaprator can be written which compares the DB details and the new edited details.

*/

const dataInDB = {
	name: 'John',
	age: 35,
	city: 'New York',
}

// This solution doesn't handle nested objects.
const compareProducts = (editedData) => {
	const result = { ...dataInDB }
	// Iterate over the keys in editedData and compare to dataInDB
	for (let key in editedData) {
		// Check if the key exists in dataInDB and has a different value
		if (key in dataInDB && dataInDB[key] !== editedData[key]) {
			// Update the value in the result object
			result[key] = editedData[key]
		} else {
			// Add the new key and value to the result object
			result[key] = editedData[key]
		}
	}
	return result
}

const editedPayload = {
	name: 'John',
	age: 36,
	city: 'Chicago',
	hobbies: ['reading', 'hiking'],
}

console.log(compareProducts(editedPayload)) /*{
    name: 'John',
    age: 36,
    city: 'Chicago',
    hobbies: [ 'reading', 'hiking' ]
  }
  */

/* Another approach can be since we know that backend is returnign the same data whenever we try 
  to update its much easier to update the DB with the edited payload but this would be a hack.
*/
