function arrayManipulation(lengthOfArray, queries){
    var solutionObj = {
        max: 0
    }

    var i, current, max
    
    queries.forEach(function (query){
        var startingIndex = query[0]
        var endingIndex = query[1]
        var value = query[2]

        console.log('startingIndex | endingIndex | value ::', startingIndex + ' | ' +  endingIndex + ' | ' + value );

        // populate object according to the rules of the query
        for(i = startingIndex; i < endingIndex; i++){
            if(!solutionObj[i]){
                solutionObj[i] = value
            } else{
                solutionObj[i] = current + value               
            }

            current = solutionObj[i]
            max =  solutionObj['max']

            solutionObj['max'] =  current > max ? current : max
        }
        
    })

    // console.log(`solutionObj['max']: `, solutionObj['max']);
    // console.log(`solutionObj`, solutionObj);
    // console.log('solution: ', solution);
    
    return solutionObj['max']
}


module.exports = {
    arrayManipulation
  }