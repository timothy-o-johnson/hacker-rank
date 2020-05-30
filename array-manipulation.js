function arrayManipulation(lengthOfArray, queries){
    var solution
    var array = new Array (lengthOfArray).fill(0)
    var i
    
    queries.forEach(function (query){
        var startingIndex = query[0] - 1
        var endingIndex = query[1] - 1
        var value = query[2]

        console.log('startingIndex | endingIndex | value ::', startingIndex + ' | ' +  endingIndex + ' | ' + value );

        // populate the array according to the rules of the query
        for(i = startingIndex; i< endingIndex; i++){
            array[i] += value
        }
        
    })

    solution = Math.max(...array)

    console.log(solution);
    
    return solution
}


module.exports = {
    arrayManipulation
  }