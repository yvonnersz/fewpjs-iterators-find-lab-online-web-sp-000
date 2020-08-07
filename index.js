const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let hashYearWon = array.find(hash => hash.result === "W");

  if (hashYearWon != nil) {
    return hashYearWon.year
  } else {
    return undefined
  }
}
