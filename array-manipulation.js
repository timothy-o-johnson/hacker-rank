var lengthOfArray = 10
var queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]

arrayManipulation(lengthOfArray, queries)


function arrayManipulation(lengthOfArray, queries) {
    var solutionObj = {
        max: 0
    }

    var startingIndex, endingIndex, value
    var i, current, max

    queries.forEach(function (query) {
        startingIndex = query[0]
        endingIndex = query[1]
        value = query[2]

        // populate object according to the rules of the query
        for (i = startingIndex; i <= endingIndex; i++) {
            if (!solutionObj[i]) {
                solutionObj[i] = value
            } else {
                current = solutionObj[i]
                solutionObj[i] = current + value
            }

            current = solutionObj[i]
            max = solutionObj['max']

            solutionObj['max'] = current > max ? current : max
        }

    })

    return solutionObj['max']
}


module.exports = {
    arrayManipulation
}