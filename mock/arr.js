import { Random, mock } from  'mockjs'
export const orderedArr = (num = 10) => Random.range(num)
export const randomArr = (num) => Random.shuffle(orderedArr(num))