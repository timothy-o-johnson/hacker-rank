/* A cricket match is going to be held. The field is represented by a 1D plane.

A cricketer, Mr. X has N favorite shots. Each shot has a particular range. The range of the ith shot is from Ai to Bi. That means his favorite shot can be anywhere in this range.

Each player on the opposite team can field only in a particular range. Player i can field from Ci to Di.

You are given the N favorite shots of Mr. X and the range of M players.

Si represents the teamStrength of each player i.e. the number of shots player  can stop.

Your task is to find:

.

*/

function solve (shots, players) {
  let teamStrength = 0
  let shotMin, shotMax
  let playerMin, playerMax
  let playerNum

  players.forEach((player, idx) => {
    let playerStrength = 0
    let playerNum = idx + 1

    playerMin = player[0]
    playerMax = player[1]

    shots.forEach(shot => {
      shotMin = shot[0]
      shotMax = shot[1]

      if (
        (shotMin >= playerMin && shotMin <= playerMax) ||
        (shotMax >= playerMin && shotMax <= playerMax) ||
        (playerMin >= shotMin && playerMin <= shotMax)
      ) {
        playerStrength++
      }
    })
    console.log(`Player ${playerNum} Strength: `, playerStrength)

    teamStrength += playerStrength
  })
  console.log('teamStrength: ', teamStrength)
  return teamStrength
}

module.exports = {
  solve
}
