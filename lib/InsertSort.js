import { swap } from '../utils/index.js'

export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  let n = arr.length
  insert(arr)
  function insert (arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        count++
        swap(arr, j, j + 1)
      }
    }
  }
  return {
    name: 'Insert Sort ( 插入排序 )',
    count: '运行的次数为: ' + count,
    O: `O(n*n): (${n * n})`,
    origin: data.join(),
    result: arr.join()
  }
}
