const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let hashYearWon = array.find(hash => hash.result === "W")
  return hashYearWon.year
}
