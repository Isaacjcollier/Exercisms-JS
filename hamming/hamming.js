var Hamming = function(){}

Hamming.prototype.compute = function(dna1, dna2){
  var count = 0
  dna1.split('')
  dna2.split('')
  if(dna1.length != dna2.length){
throw new Error('DNA strands must be of equal length.')
}
  for( i = 0 ;i < dna1.length ; i++){
    if(dna1[i] != dna2[i] ){
      count += 1
    }
  }
  return count
}

module.exports = Hamming;
