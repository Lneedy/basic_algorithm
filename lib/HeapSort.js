import { swap, M_Log } from '../utils/index.js'

export default function(data) {
  // 统计运转次数
  let count = 0
  let arr = [].concat(data)
  let n = arr.length
  heap(arr, n)
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

  return {
    name: 'Heap Sort ( 堆排序 )',
    count: '运行的次数为: ' + count,
    O: `O(nlgn): (${n*M_Log(10, n)})`,
    origin: data.join(),
    result: arr.join()
  }
}
