function Hamming() {}

/* what if i have a counter that tallies
up the differences and returns the number of differences
and subtracts if they actual match up */

Hamming.prototype.compute = function(strand1, strand2) {
  var differences = 0;
  for (var j = 0; j < strand1.length; j++) {
    if (strand1.length !== strand2.length) {
      throw 'DNA strands must be of equal length.';
    }
    else if (strand1.charAt(j) === strand2.charAt(j)) {
      console.log('The biological code at '+strand1.charAt(j)+' was the same doctor!');
    } else {
      // add to differences
      differences++;
    }
  }
  return differences;
};

module.exports = Hamming;
