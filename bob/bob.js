//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  console.log(input);
  var nums = [0,1,2,3,4,5,6,7,8,9];
  var isShout = input.toUpperCase();
  var numRegEx = /[0-9]/gi;
  var sil1 = 32;
  var sil2 = '';
  for (var i = 0; i < input.length; i++) {
    if (input.slice(-1) === sil2 || input.charCodeAt(i) === sil1) {
      return 'Fine. Be that way!';
    }
    if (input.slice(-1) === '.') {
      return 'Whatever.';
    }
    if (numRegEx === input[i]) {
      return 'Whatever.';
    }
    if (isShout === input) {
      return 'Whoa, chill out!';
    }
    if (input.slice(-1) === '?') {
      return 'Sure.';
    }
    if (input.slice(-1) === '!') {
      return 'Whatever.';
    }
    else {
      return 'Whatever.';
    }
  }
};

module.exports = Bob;
