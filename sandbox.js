var test_1 = {
  G: [
    '7283455864',
    '6731158619',
    '8988242643',
    '2229505813',
    '3830589324',
    '2229505813',
    '5633845374',
    '5633845374',
    '6473530293',
    '7053106601',
    '2229505813',
    '0834282956',
    '4607924137'
  ],

  P: ['9505', '3845', '3530']
}

let i = 0
let str
let regexp
const numOfPatternRows = test_1.P.length
let matchArr = []
let row
let col

for (i = 0; i < numOfPatternRows; i++) {
  regexp = RegExp(test_1.P[i], 'g')

  for (j = 0; j < test_1.G.length; j++) {
    str = test_1.G[j]

    while ((matches = regexp.exec(str)) !== null) {
      row = i
      col = regexp.lastIndex

      matchArr.push([row, col])
      console.log(`Found ${regexp}at row ${row} at ${col}.`)
    }
  }
}

console.log('matchArr', matchArr)
let matchCount = 0

for (i = 1; i < matchArr.length - 1; i++) {
  if (matchArr[i][1] === matchArr[i + 1][1]) {
    matchCount += 1
  } else {
    matchCount = 0
  }
}

console.log(matchCount === numOfPatternRows)
