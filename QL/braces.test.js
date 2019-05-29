const braces = require('./braces')

/* global test describe expect */

describe('braces()', () => {
  test("should return 'Yes, No'", () => {
    var values = ['{}[]()', '{[}]']
    var solution = ['Yes', 'No']
    expect(braces.braces(values)).toEqual(expect.arrayContaining(solution))
  })
})
