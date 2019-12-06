import { swap } from '../utils/index.js'
import {heap} from './HeapSort'
import {insert} from './InsertSort'
export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  let n = arr.length
  let t = 16 // 指定位数
  let l = 5 // 层级
  let cl = 0 // 当前层级
  // 如果长度少于指定位数 采用 插排
  if (n < t) {
    insert(arr)
  } else {
    quickSort(arr)
  }

  // 堆排
  function heap (arr, n) {
    // 初始化堆
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      adjust(arr, i, n)
    }
    // 堆排
    for (let i = n - 1; i > 0; i--) {
      swap(arr, 0, i) // 根节点跟最后一个节点交换
      adjust(arr, 0, i) // 重新触发比对 排除掉最后一个最大的值
    }
  
    // 调整非叶子节点
    function adjust(arr, ind, len) {
      count++
      // 当前的非叶子节点
      let larget = arr[ind]
      // 循环该节点的子节点
      for (let i = 2 * ind + 1; i < len; i = 2 * i + 1) {
        larget = arr[ind]
        // 在范围内并且 当前的值比右一个节点小
        if (i + 1 < len && arr[i] < arr[i + 1]) {
          // 将当前的更大的节点的位置更新
          i++
        }
        // 如果比当前最大的节点还大
        if (larget < arr[i]) {
          swap(arr, i , ind)
          ind = i
        }
      }
    }
  }

  // 快排
  function quickSort (arr) {
    if (arr.length <= 1) {
      cl = 0
      return arr
    }
    
    let right = []
    let left = []
    let n = arr.length
    // 如果长度小于指定位数 采用插排
    if (n < t) {
      return insert(arr)
    }
    // 当前层级
    if(cl > l) {
      // 切换算法
      cl = 0
      return heap(arr, n)
    }
    count++
    // 继续计算层级
    cl++
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

  // 插入
  function insert (arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        count++
        swap(arr, j, j + 1)
      }
    }
  }
  // 如果层级太深 采用 堆排
  // 如果层级不深 采用 快排

  return {
    name: 'Introspective Sort ( 内省排序[快排, 插排, 堆排] )',
    count: '运行的次数为: ' + count,
    origin: data.join(),
    result: arr.join()
  }
}
