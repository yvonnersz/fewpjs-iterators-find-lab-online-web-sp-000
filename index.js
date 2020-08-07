const testVar = {}

function testFunc() {
  return "hi"
}

function superBowlWin(array) {
  let hashYearWon = array.find(hash => hash.result === "W")
  return hashYearWon.year
}
