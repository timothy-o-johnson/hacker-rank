/* The Grid Search

Complete the gridSearch function in the editor below. It should return YES if the pattern exists in the grid, or NO otherwise.

gridSearch has the following parameter(s):

G: the grid to search, an array of strings
P: the pattern to search for, an array of strings */

// Complete the gridSearch function below.

function gridSearch (grid, pattern) {
  let i = 0
  let j = 0
  let gridRow
  let patternRow
  const numOfPatternRows = pattern.length
  let row
  let col
  let matches
  let found = false
  let matchObj = {}

  // loop through each row
  for (j = 0; j < grid.length; j++) {
    gridRow = grid[j]
    for (i = 0; i < numOfPatternRows; i++) {
      patternRow = pattern[i]

      // loop through each char in row
      for (var k = 0; k < gridRow.length; k++) {
        for (var l = 0; l < patternRow.length; l++) {
          // compare grid to pattern
          if (gridRow[k + l] !== patternRow[l]) {
            break
          } else if (gridRow[k + l] === patternRow[l] && l === patternRow.length - 1) {
            row = j
            col = k + l - (patternRow.length - 1)
            // if matches entire row then save to matchArr
            matchObj[row] = col
            console.log(`Found patternRow ${i}: ${patternRow} in Grid at row ${row} at ${col}.`)
          }
        }
      }
    }
  }

  console.log('matchObj', JSON.stringify(matchObj))

  let matchCount = 0
  const keys = Object.keys(matchObj)

  for (i = 0; i < keys.length; i++) {
    var first = keys[i]
    var second = (parseInt(first) + 1).toString()

    // has to follow the row AND match the column
    if (matchObj[first] !== null && matchObj[second] !== null && matchObj[first] === matchObj[second]) {
     // console.log('indices', first, second)

     // console.log('matchObj', JSON.stringify(matchObj[i]), JSON.stringify(matchObj[i + 1]))
     // console.log('matchObj', matchObj[first], matchObj[second])

      matchCount++
      found = matchCount === numOfPatternRows - 1
      if (found) {
        break
      }
    } else {
      matchCount = 0
    }
  }

  var solution = found ? 'YES' : 'NO'

  console.log(solution)
  return solution
}

var test_1 = {
  G: [
    '7283455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '2229505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137'
  ],

  P: ['9505', '3845', '3530']
}

const test_2 = {
  G: [
    '400453592126560', // 0
    '114213133098692', // 1
    '474386082879648', // 2
    '522356951189169', // 3
    '887109450487496', // 4
    '252802633388782', // 5
    '502771484966748', // 6
    '075975207693780', // 7
    '511799789562806', // 8
    '404007454272504', // 9
    '549043809916080', // 10
    '962410809534811', // 11
    '445893523733475', // 12
    '768705303214174', // 13
    '650629270887160' // 14
  ],

  P: ['99', '99']
}

const test_3 = {
  G: ['123412', '561212', '123612', '781234'],

  P: ['12', '34']
}

const test_4 = {
  G: ['123', '456', '789', '781234'],

  P: ['45', '89']
}

const test_5 = {
  G: ['123412', '561212', '123634', '781288'],

  P: ['12', '34']
}

const test_6 = {
  G: ['111111111111111', '111111111111111', '111111011111111', '111111111111111', '111111111111111'],

  P: ['11111', '11111', '11110']
}
gridSearch(test_6.G, test_6.P)
gridSearch(test_5.G, test_5.P)
gridSearch(test_4.G, test_4.P)
gridSearch(test_3.G, test_3.P)
gridSearch(test_2.G, test_2.P)
gridSearch(test_1.G, test_1.P)
