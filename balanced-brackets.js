var current = '[{'

console.log(isBalanced(current))

function isBalanced (current) {
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
        return 'NO'
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
        return 'NO'
      }

      if (i === current.length - 1 && braceTracker.length === 0) {
        return 'YES'
      }
    }
  }
}

module.exports = {
  isBalanced
}
