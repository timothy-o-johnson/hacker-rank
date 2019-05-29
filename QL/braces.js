var values = ['[{']

function braces (values) {
  var solution = []

  values.forEach(current => {
    var braceTracker = []
    for (var i = 0; i < current.length; i++) {
      var brace = current[i]
      var openOrClosed

      // determine if current brace is opened or closed
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
        // if open and the last element
        if (i === current.length - 1) {
          solution.push('NO')
          console.log('solution', solution)
          return
        }
        braceTracker.push(brace)
      } else {
        // else see if closes the appropriate last brace in braceTracker
        var isClosed
        var lastBrace = braceTracker.length - 1
        var braceCompare = braceTracker[lastBrace] + brace

        switch (braceCompare) {
          case '{}':
          case '[]':
          case '()':
            isClosed = true
            break
          default:
            isClosed = false
        }

        if (isClosed) {
          braceTracker.pop()
        } else {
          solution.push('NO')
          console.log('solution', solution)
          return
        }

        if (i === current.length - 1 && braceTracker.length === 0) {
          solution.push('YES')
          console.log('solution', solution)
          return
        }
      }
    }
  })

  return solution
}

console.log(braces(values))

module.exports = {
  braces
}
