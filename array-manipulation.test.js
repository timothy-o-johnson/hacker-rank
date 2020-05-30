const arrayManipulation = require('./array-manipulation')

/* global test describe expect */

describe('arrayManipulation()', () => {
    test('given parameters 10 & [[1, 5,3]], should return 3', () => {
        var lengthOfArray = 10
        var query = [[1, 5, 3]]

        expect(arrayManipulation.arrayManipulation(lengthOfArray, query)).toEqual(3)
    })

    test('given parameters 10 & [[1, 5, 3], [4, 8, 7]] , should return 10', () => {
        var lengthOfArray = 10
        var query = [[1, 5, 3], [4, 8, 7]]

        expect(arrayManipulation.arrayManipulation(lengthOfArray, query)).toEqual(10)
    })

})

