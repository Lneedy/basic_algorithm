export default function (data) {
	// 统计运转次数
	let count = 0 
	let arr = [].concat(data)
  arr = bucketSort(arr)
  function bucketSort(arr) {
    let len = arr.length
    let result = []
    let temp = []
    for (let i = 0; i < len; i++) {
      count++
      if (temp[arr[i]] === undefined) {
        temp[arr[i]] = 1
      } else {
        temp[arr[i]]++
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== undefined) {}
      while (temp[i]-- > 0) {
        count++
        result.push(i)
      }
    }
    return result
  }

  return {
		name: 'Counting Sort ( 桶排序(计排升级版) )',
		count: '运行的次数为: '+ count,
		origin: data.join(),
		result: arr.join()
	}
}