var Words = function (){}

Words.prototype.count = function(words){
  var obj = {}
  // ['one', 'of', 'each'] (.+)
  var seperatedWords = words.trim().toLowerCase().split(/\s+|\n+|\t+/)

  for ( i = 0 ; seperatedWords.length > i ; i++ ){
   var singleWord = seperatedWords[i]
   var counter = 0

   for(j = 0; seperatedWords.length > j; j++){
     if(singleWord === seperatedWords[j]){
       counter++
     }
   }
   obj[singleWord] = counter
  }
  return obj
}

module.exports = Words
// - separatedWords => ['one', 'of', 'each']
// - count = 0
//
// loop ['one', 'of', 'each'] do |var|
//   var === 'one'
//   loop ['one', 'of', 'each'] do |othervar|
//     if var == othervar then count++
