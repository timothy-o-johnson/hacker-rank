/*
Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element res[j]represents Alice's rank after the jth game.

climbingLeaderboard has the following parameter(s):

scores: an array of integers that represent leaderboard scores
alice: an array of integers that represent Alice's scores?
*/

// Complete the climbingLeaderboard function below.
function climbingLeaderboard (scores, alice) {
  let scoreboard = {}
  let score = ''
  let rank = 1
  let aIndex = alice.length - 1
  let aliceRanking = []
  
  // test Alice's best score
  if (alice[aIndex] >= scores[0]) {
    aliceRanking.push(rank)
    aIndex--
  }
  
  // filter unique while simultaneously testing alice's score
  for (let i = 0; i < scores.length; i++) {
    score = scores[i]
    if (!scoreboard[score]) {
      scoreboard[score] = rank
    
      while (alice[aIndex] >= score) {
        aliceRanking.unshift(rank)
        aIndex--
      }
      rank++
    }
  }

  // finish looping through Alice's worst scores
  while(aIndex >= 0){
    aliceRanking.unshift(rank)
    aIndex--
  }

  return aliceRanking
}