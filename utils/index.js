export const swap  = (arr, i, j) => {
	let temp = arr[i]
	arr[i] = arr [j]
	arr[j] = temp
}

export const M_Log = (x, y) => Math.log(y) / Math.log(x)