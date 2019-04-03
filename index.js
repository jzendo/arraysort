function quickSort(arr) {
	const l = arr.length

	const b = 0
	const m = Math.floor(l / 2)
	const e = l - 1

	// Swap: b, m
	if (arr[b] > arr[m])[arr[b], arr[m]] = [arr[m], arr[b]]

	// Swap: m, e
	if (arr[m] > arr[e])[arr[m], arr[e]] = [arr[e], arr[m]]

	if (m <= 1) return arr

	return [
		...quickSort(arr.slice(0, m)),
		arr[m],
		...quickSort(arr.slice(m + 1))
	]

}

export default quickSort
