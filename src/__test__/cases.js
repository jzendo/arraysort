export default function cases(sortFn, { ERROR_MESSAGE_PARAM_INVALID_ARRAY }) {
  /*
  let prev = Date.now()
  let current

  beforeEach(() => {
    prev = Date.now()
  })

  afterEach(() => {
    current = Date.now()
    console.log(`- ${current - prev} ms elapsed time.`)
  })
  */

  test('should be function', () => {
    expect(typeof sortFn).toBe('function')
  })

  test('should pass array', () => {
    expect(() => sortFn(123)).toThrowError(
      RegExp(ERROR_MESSAGE_PARAM_INVALID_ARRAY)
    )

    expect(() => sortFn()).toThrowError(
      RegExp(ERROR_MESSAGE_PARAM_INVALID_ARRAY)
    )

    expect(() => sortFn(true)).toThrowError(
      RegExp(ERROR_MESSAGE_PARAM_INVALID_ARRAY)
    )
  })

  test('should be ok', () => {
    expect(sortFn([])).toHaveLength(0)
    expect(sortFn([2, 1, 3])).toHaveLength(3)
    expect(sortFn([2, 1])).toEqual([1, 2])
    expect(sortFn([2, 1, 3])).toEqual([1, 2, 3])
    expect(sortFn([2, 3, 1])).toEqual([1, 2, 3])
    expect(sortFn([2, 3, 1, 3])).toEqual([1, 2, 3, 3])
    expect(sortFn([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5])
    expect(sortFn([2, 3, 1, 5, 10, 6])).toEqual([1, 2, 3, 5, 6, 10])
    expect(sortFn([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })

  const COUNT = 3000
  const testArr = new Array(COUNT).fill().map(i => (Math.random() * COUNT) >>> 0)
  const expectArr = testArr.sort((a, b) => a - b).slice()

  test('should be ok(big array)', () => {
    expect(sortFn(testArr)).toEqual(expectArr)
  })

}
