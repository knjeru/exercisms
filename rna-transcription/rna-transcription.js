function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(code) {
  var rna = [];
  for (var i = 0; i < code.length; i++) {
    if (code[i] === 'G') {
      rna.push('C');
    }
    if (code[i] === 'C') {
      rna.push('G');
    }
    if (code[i] === 'T') {
      rna.push('A');
    }
    if (code[i] === 'A') {
      rna.push('U');
    }
  }
  result = rna.join('');
  return result;

  // var rna = [];
  // switch (code) {
  //   case 'G':
  //     code = 'C';
  //     rna.push(code);
  //   case 'C':
  //     code = 'G';
  //     rna.push(code);
  //   case 'T':
  //     code = 'A';
  //     rna.push(code);
  //   case 'A':
  //     code = 'U';
  //     rna.push(code);
  //   default:
  //     break;
  // }
  // return rna.join();
};

module.exports = DnaTranscriber;
