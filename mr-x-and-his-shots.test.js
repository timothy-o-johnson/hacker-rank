const solve = require('./mr-x-and-his-shots')

/* global test describe expect */

describe('isBalanced()', () => {
  test('should return 9', () => {
    var shots = [[1, 2], [2, 3], [4, 5], [6, 7]]
    var players = [[1, 5], [2, 3], [4, 7], [5, 7]]
    var solution = 9

    expect(solve.solve(shots, players)).toEqual(solution)
  })
})
