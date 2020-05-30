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

    test('given parameters 10 & [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]] , should return 31', () => {
        var lengthOfArray = 10
        var query = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]

        expect(arrayManipulation.arrayManipulation(lengthOfArray, query)).toEqual(31)
    })

})