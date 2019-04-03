import conditionSwap from './private/swap'
import {
  ERROR_MESSAGE_PARAM_INVALID_ARRAY
} from './private/error-message'

import {
  invariant
} from './private'

function getMidIndex(l) {
  return Math.floor(l / 2)
}

function compare(arr) {
  const l = arr.length
  if (l < 2) return arr

  const b = 0
  const e = l - 1

  // Swap: b, e
  conditionSwap(arr, b, e)

  if (l > 2) {
    const m = getMidIndex(l)
    // Swap: b, m
    conditionSwap(arr, b, m)
    // Swap: m, e
    conditionSwap(arr, m, e)
  }

  return arr
}

function diffAsBase(diffArray, base, dir = 1) {
  return diffArray.reduce((r, c) => {
    if ((c - base) * dir > 0) r.moves.push(c)
    else r.remains.push(c)
    return r
  }, {
    remains: [],
    moves: []
  })
}

function quickSort(arr) {
  invariant(Array.isArray(arr), ERROR_MESSAGE_PARAM_INVALID_ARRAY)

  const l = arr.length
	// Array has less than 4 (items)
  if (l <= 3) {
    return compare(arr)
  }

  const m = getMidIndex(l)
  const mValue = arr[m]
  const left = diffAsBase(arr.slice(0, m), mValue)
  const right = diffAsBase(arr.slice(m + 1), mValue, -1)

  return [
    ...quickSort([
      ...left.remains,
      ...right.moves
    ]),
    arr[m],
    ...quickSort([
      ...left.moves,
      ...right.remains
    ])
  ]
}

export default quickSort

export {
	ERROR_MESSAGE_PARAM_INVALID_ARRAY
}
