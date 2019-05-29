const isBalanced = require('././balanced-brackets')

/* global test describe expect */

describe('isBalanced()', () => {
  test("should return 'YES'", () => {
    var values = '{}[]()'
    var solution = 'YES'
    expect(isBalanced.isBalanced(values)).toEqual(solution)
  })

  test("should return 'NO'", () => {
    var values = '{{)[](}}'
    var solution = 'NO'
    expect(isBalanced.isBalanced(values)).toEqual(solution)
  })

  test("should return 'NO'", () => {
    var values = '{(([])[])[]]}'
    var solution = 'NO'
    expect(isBalanced.isBalanced(values)).toEqual(solution)
  })

  test("should return 'NO' if no closing brackets", () => {
    var values = '{('
    var solution = 'NO'
    expect(isBalanced.isBalanced(values)).toEqual(solution)
  })
})
