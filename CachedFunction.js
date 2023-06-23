const CACHE = {}
const PENDING_PROMISES = {}

function fetchData(
	api_key,
	headers = {},
	refetch = false,
	retry_count = 0,
	onCancel
) {
	if (!refetch && api_key in CACHE) {
		return Promise.resolve(CACHE[api_key])
	} else if (api_key in PENDING_PROMISES) {
		return PENDING_PROMISES[api_key]
	} else {
		const url = `https://api.example.com/data?key=${api_key}`
		const options = { headers }
		const promise = new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(url, options)
				const data = await response.json()
				CACHE[api_key] = data
				resolve(data)
			} catch (err) {
				if (retry_count < 3) {
					retry_count += 1
					console.log(
						`API call failed, retrying (${retry_count}/3)...`
					)
					await new Promise((resolve) => setTimeout(resolve, 1000))
					const cancelToken = get_data(
						api_key,
						headers,
						refetch,
						retry_count,
						onCancel
					)
					resolve(cancelToken)
				} else {
					console.error('API call failed after 3 retries:', err)
					reject(err)
				}
			} finally {
				delete PENDING_PROMISES[api_key]
			}
		})

		if (onCancel) {
			const cancelToken = () => {
				onCancel()
				delete PENDING_PROMISES[api_key]
				return Promise.resolve()
			}
			promise.cancel = cancelToken
		}

		PENDING_PROMISES[api_key] = promise
		return promise
	}
}
