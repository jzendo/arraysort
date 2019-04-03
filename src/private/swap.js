function incremental(arr, i, j) {
  return arr[i] > arr[j]
}

export default function swap(arr, i, j, conditionFn = incremental) {
  if (conditionFn(arr, i, j)) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
