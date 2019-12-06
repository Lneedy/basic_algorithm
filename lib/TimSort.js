import { swap } from '../utils/index.js'

export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  arr = timsort(arr)

  // 二分查找
  function binary_search (arr, i, j, value) {
    if (i >= j) {
      if (arr[i] <= value) return i+1
      else return i
    } else {
      let mid = (i + j) / 2
      if (arr[mid] < value) return binary_search(arr, mid + 1, j, value)
      else return binary_search(arr, i, mid - 1, value)
    }
  }

  // 二分插入
  function insert_2_sort (arr) {
    count++
    let len = arr.length
    for (let i = 0; i < len; i++) {
      let pos = binary_search(arr, 0, i - 1, arr[i])
      arr = [].concat(arr.slice(0, pos), arr.slice(pos, i) , arr.slice(i))
    }
    return arr
  }

  // 合并列表
  function merge (arr1, arr2) {
    if (arr1 && arr1.length === 0) return arr2
    if (arr2  && arr2.length === 0) return arr1
    count++
    if (arr1[0] < arr2[0]) return [].concat([arr1[0]], merge(arr1.slice(1), arr2))
    else return [].concat([arr2[0]], merge(arr1, arr2.slice(1)))
  }

  function timsort (arr) {
    let runs = []
    // 排序
    let sorted_runs = []
    let new_run = [arr[0]]
    let len = arr.length
    for (let i = 1; i < len; i++) {
      // 内部排序
      if (arr[i] < arr[i - 1]) {
        runs.push(new_run)
        new_run = [arr[i]]
      } else {
        new_run.push(arr[i])
      }
      // 将排序好的内容添加到当前的runs之后
      if (len - 1 === i) {
        runs.push(new_run)
        break;
      }
    }
    // 先排序
    for (let i = 0; i < runs.length; i++) {
      insert_2_sort(runs[i])
    }
    // 合并runs
    for (let i = 0; i < runs.length; i++) {
      sorted_runs = merge(sorted_runs, runs[i])
    }
    return sorted_runs
  }

  return {
    name: 'Tim Sort ( 混合稳定算法(归并排序, 二分插入))',
    count: '运行的次数为: ' + count,
    origin: data.join(),
    result: arr.join()
  }
}
