import { swap } from '../utils/index.js'
export default function (data) {
	// 统计运转次数
	let count = 0 
	let arr = [].concat(data)
	let n = arr.length
	let s = 1.3 // 因子
	let flag = false 
	let j = n
	while (j > 1 || flag){
		let i = 0;
		j = Math.max(j / s, 1)
		flag = false
		while (i + j <= n) {
			if (arr[i] > arr[i + j]) {
				count++
				swap(arr, i, i + j)
				flag = true
			}
			i++
		}
	}
	return {
		name: 'Comb Sort ( 梳排序 )',
		count: '运行的次数为: '+ count,
		origin: data.join(),
		result: arr.join()
	}
}