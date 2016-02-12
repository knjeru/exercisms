function Gigasecond(input) {
  gs = input;
}


Gigasecond.prototype.date = function() {
  var gigaSeconds = Math.pow(10,9);
  var convertInitialTime = Math.round((gs.valueOf() / 1000.00) + gigaSeconds);
  var expectedDate = new Date(convertInitialTime * 1000);

  return expectedDate;
};

module.exports = Gigasecond;
