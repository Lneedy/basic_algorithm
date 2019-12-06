import { swap } from '../utils/index.js'
export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  arr = quickSort(arr, count)
  function quickSort (arr) {
    if (arr.length <= 1) return arr
    count++
    let right = []
    let left = []
    let n = arr.length
    // 随机数
    let mid = Math.floor(n / 2)
    for (let i = 0; i < n; i++) {
      if (arr[i] < arr[mid]) {
        left.push(arr[i])
      } else if (arr [i] > arr[mid]) {
        right.push(arr[i])
      }
    }
    return [].concat(quickSort(left), [arr[mid]], quickSort(right))
  }
  return {
    name: 'Quick Sort ( 快速排序 )',
    count: '运行的次数为: ' + count,
    origin: data.join(),
    result: arr.join()
  }
}
