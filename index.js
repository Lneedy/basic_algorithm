import BubbleSort from './lib/BubbleSort.js'
import CombSort from './lib/CombSort.js'
import HeapSort from './lib/HeapSort.js'
import MergeSort from './lib/MergeSort.js'
import QuickSort from './lib/QuickSort.js'
import InsertSort from './lib/InsertSort.js'
import IntroSort from './lib/IntroSort.js'
import TimSort from './lib/TimSort.js'
import { randomArr } from './mock/arr.js'
let len = 100000
let joinLen = 20
let arr = randomArr(len)
let sort = [CombSort, BubbleSort, HeapSort, MergeSort, QuickSort, InsertSort, IntroSort, TimSort]
let endJoin = ''
for (let i = 0; i < joinLen; i++) {
  endJoin += '--+-'
}
sort.map(fn => {
  let res = fn(arr)
  let {name, count, result, O} = res
  // ${result}
  console.log(`${name} ${O?O: ''} (${count})`)
  console.log('%s \n', endJoin)
})
