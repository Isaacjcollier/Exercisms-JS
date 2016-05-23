var DnaTranscriber = function(){}

DnaTranscriber.prototype.toRna = function(strand){
  console.log(strand)
  var compliment ={ 'C':'G', 'G' : 'C', 'A' : 'U', 'T' : 'A'
  }
    function translate(transform){
      return compliment[transform];
    }
    return strand.split('').map(translate).join('')

}
module.exports = DnaTranscriber

// G = C
// C = G
// A = U
// T = A
