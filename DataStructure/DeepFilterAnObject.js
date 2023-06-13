/*
Create a function in javascript which will take a nested object obj and a filter function filter as input and return the filtered object.

Note: The filtering should happen on the value.

Input:
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
    f: {
      g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
};

*/

const filter = (s) => typeof s === 'string'

function deepFilterAnObject(obj, func) {
	let resultObj = {}
	for (const key in obj) {
		const element = obj[key]
		if (typeof element === 'object' && element !== null) {
			const filteredObj = deepFilterAnObject(element, func)
			if (Object.keys(filteredObj).length > 0) {
				resultObj[key] = filteredObj
			}
		} else if (func(element)) {
			resultObj[key] = element
		}
	}

	return resultObj
}

console.log(
	deepFilterAnObject(
		{
			a: 1,
			b: {
				c: 'Hello World',
				d: 2,
				e: {
					f: {
						g: -4,
					},
				},
				h: 'Good Night Moon',
			},
		},
		filter
	)
)
