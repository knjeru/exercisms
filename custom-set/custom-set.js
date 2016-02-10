function CustomSet (arr) {
  this.set = arr;
}

CustomSet.prototype.delete = function (val) {
  // deleting value from an array
  var index = this.set.indexOf(val);
  if (index === -1) {
    return this
  } else {
    this.set.splice(index, 1);
    return this;
  }
  // find index of the value to delete
  // call splice on that array
};

CustomSet.prototype.eql = function(instance) {
  var thisArraySorted = this.set.sort();
  var instanceSorted = instance.set.sort();
  // compare arrays
  // check if each element os equal to the same...
  // elemen in the other array, in the same position
  for (var i = 0; i < thisArraySorted.length; i++) {
    if (thisArraySorted[i] !== instanceSorted[i]) {
      return false;
    }
  }
  return true;
};

CustomSet.prototype.difference = function(instance) {
  // take two arrays and see what is not common
  // input is an arrays
  // output is array with values that aren't in both...
  //... this.set and the input.set
  // comparing two arrays again
  // loop through input.set, checking if each value is present in the this.set array using indexOf
  // push any values where indexOf() === -1 to a new array
};

module.exports = CustomSet;
