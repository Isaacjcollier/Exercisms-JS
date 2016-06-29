var Isograms = function (word) {
  this.word = word
}
Isograms.prototype.isIsogram = function () {
  var list = []
  for (var i = 0; i < this.word.length; i++) {
    var letter = this.word[i]
    var answer = list.indexOf(letter)
    if (answer === -1) {
      list.push(letter)
    } else {
      return false
    }
  }
  return true
}

module.exports = Isograms
