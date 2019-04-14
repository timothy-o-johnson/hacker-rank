const scores = [100, 90, 90, 80, 75, 60] // [100, 100, 50, 40, 40, 20, 10]//[200, 200, 150, 130, 125, 125, 100, 100, 95, 90, 6]
const alice = [50, 65, 77, 90, 102] // [5, 25, 50, 120] //[5, 80, 125, 150, 150, 176, 200, 210]
let scoreboard = {}
let score = ''
let rank = 1
let aIndex = alice.length - 1
let aliceRanking = []

if (alice[aIndex] >= scores[0]) {
  aliceRanking.push(rank)
  aIndex--
}

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

while(aIndex >= 0){
  aliceRanking.unshift(rank)
  aIndex--
}

console.log(aliceRanking)
console.log(scoreboard)