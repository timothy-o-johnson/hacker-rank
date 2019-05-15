var values = ['{}[]()', '{[}]']


function braces (values){
  var solution = []
values.forEach(current => {
  var current = values[0]

  for (var i = 0; i < current.length; i++) {
    var braceTracker = []
    var lastOpenBrace

    var brace = current[i] 
    var openOrClosed

    // determine if it's opened or closed
    switch (brace) {
      case '{':
      case '[':
      case '(':
        openOrClosed = 'open'
        break
      case '}':
      case ']':
      case ')':
        openOrClosed = 'closed'
        break
    }
    // if open add it to braceTracker
    if (openOrClosed === 'open') {
      braceTracker.push(brace)
    } else {
      // else see if closes the appropriate last brace in braceTracker
      // if it does, remove that last brace, and check the following brace
      for (var j = braceTracker.length - 1; j >= 0; j--) {
        lastOpenBrace = braceTracker[j] 
        var braceCompare = lastOpenBrace + brace

        switch (braceCompare) {
          case '{}':
          case '[]':
          case '()':
            // move on to next one
            break
          default:
            solution.push('NO')
        }
      }
    }
  }
  solution.push('YES')  
  return solution
}
)
}

console.log( braces(values) )