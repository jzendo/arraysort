import swap from './private/swap'
import {
  ERROR_MESSAGE_PARAM_INVALID_ARRAY
} from './private/error-message'

import {
  invariant
} from './private'


function bubbleSort(arr) {
  invariant(Array.isArray(arr), ERROR_MESSAGE_PARAM_INVALID_ARRAY)

  const len = arr.length
  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j <=  len - 1 - i; j++) {
      swap(arr, j, len - 1 - i)
    }
  }
  return arr
}

export default bubbleSort

export {
	ERROR_MESSAGE_PARAM_INVALID_ARRAY
}
