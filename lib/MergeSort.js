import { swap } from '../utils/index.js'
export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  arr = mergeSort(arr)
  function mergeSort (tempArr) {
    let len = tempArr.length
    if (len === 1) return tempArr
    const mid = Math.floor(len / 2)
    const left = tempArr.slice(0, mid)
    const right = tempArr.slice(mid)
    // 分组
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge (left, right) {
    count++
    const result = []
    let l = 0
    let r = 0
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }

    while (l < left.length) {
      result.push(left[l])
      l++
    }

    while (r < right.length) {
      result.push(right[r])
      r++
    }

    return result

  }

  return {
    name: 'Merge Sort ( 归并排序 )',
    count: '运行的次数为: ' + count,
    origin: data.join(),
    result: arr.join()
  }
}
