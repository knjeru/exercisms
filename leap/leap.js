function Year(info) {
  year = info;
}

Year.prototype.isLeap = function() {
  if ((year % 4) === 0 && (year % 100) === 0) {
    return true;
  }
  else {
    return false;
  }
};


module.exports = Year;
