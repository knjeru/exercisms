function Words() {}

// set each of the indexed words as keys in an Object
// then count the words that match in the the array

/* First part to loop through and set keys*/

// loop through to set keys


Words.prototype.count = function(input) {
  var words = {};
  var objKeys = input.split(' ');
  var key;
  var counter = 0;
  for (var i = 0; i < objKeys.length; i++) {
    key = objKeys[i];
    if (objKeys[i] === objKeys[i]) {
      if (counter === counter) {
        counter = 0;
        counter++;
      }
    }

    words[key] = counter;
  }
  return words;
};

module.exports = Words;
