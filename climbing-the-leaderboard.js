/*
Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element res[j]represents Alice's rank after the jth game.

climbingLeaderboard has the following parameter(s):

scores: an array of integers that represent leaderboard scores
alice: an array of integers that represent Alice's scores?
*/

// Complete the climbingLeaderboard function below.
function climbingLeaderboard (scores, alice) {

  
  let scoreboard = {}
  let aliceRanking = []
  let currentScore = ''

  // create scoreboard
  scores.forEach(score => {
    addScore(score, scoreboard)
  })

  for (var i = 0; i < alice.length; i++) {
    currentScore = alice[i]
    // remove alice's oldPosition (if any) from scoreboard
    if (i > 0) {
      removeScore(alice[i - 1], scoreboard)
    }
    // add newPosition
    addScore(currentScore, scoreboard)
   
    // create array of scoreboard object, sort it
    scores = Object.keys(scoreboard).reverse()

    // return indexOf newPosition'
    aliceRanking.push(scores.indexOf(currentScore.toString()) + 1)
  }

  return aliceRanking
}

function addScore (score, scoreboard) {
  if (!scoreboard[score]) {
    scoreboard[score] = 1
  } else {
    scoreboard[score]++
  }
}

function removeScore (score, scoreboard) {
  scoreboard[score]--
  if (scoreboard[score] === 0) {
    delete scoreboard[score]
  }
}

const scores = [100, 100, 50, 40, 40, 20, 10]
const alice = [5, 25, 50, 120]

climbingLeaderboard(scores, alice)
