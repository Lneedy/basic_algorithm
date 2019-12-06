import { swap } from '../utils/index.js'
export default function (data) {
	// 统计运转次数
	let count = 0 
	let arr = [].concat(data)
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j+1]) {
				count ++
				swap(arr, j, j + 1)				
			}
		}
	}
	return {
		name: 'Bubble Sort ( 冒泡排序 )',
		count: '运行的次数为: '+ count,
		origin: data.join(),
		result: arr.join()
	}
}