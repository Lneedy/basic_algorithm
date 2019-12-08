export default function (data) {
	// 统计运转次数
	let count = 0 
	let arr = [].concat(data)
  let max_item = Math.max(...arr)
  console.log(max_item)
  arr = countingSort(arr, max_item)
  function countingSort(arr, max) {
    let len = arr.length
    let result = []
    // 长度为 最大值 + 1 默认为 0
    let temp = Array.from({length: max  + 1}, () => 0)
    for (let i = 0; i < len; i++) {
      count++
      temp[arr[i]]++
    }
    // 利用数组默认排序 将数据输出 (相同的类型输出多次)
    for (let i = 0; i <= max; i++) {
      while (temp[i]-- > 0) {
        count++
        result.push(i)
        continue
      }
      count++
    }
    return result
  }

  return {
		name: 'Counting Sort ( 计数排序(非对比) )',
		count: '运行的次数为: '+ count,
		origin: data.join(),
		result: arr.join()
	}
}