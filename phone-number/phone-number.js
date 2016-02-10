var PhoneNumber = function(number) {
  // write code here
  // this.number = number;
  this.number = function () {
    return number.filter(function(number) {
       var rgexp = /\D/g;
       return !number.match(rgexp)
    });
  }

};

var cleanPhone = 

var phone = PhoneNumber((210) 843-2498);
console.log(phone.number());

// var PhoneNumber = function(number) {
// PhoneNumber.prototype.number = function() {
//
// var cleanPhone = number.replace(/[- . )( ]/g,'');
// if (cleanPhone.length<11 && cleanPhone.length>9) {
// return cleanPhone;
// } else {
//  return '0000000000'
// }
// }
//
// PhoneNumber.prototype.areaCode = function(area) {
// var phoneArray = area.split('');
// var code = phoneArray.slice(3,0);
// console.log(code);
//
// }
//
//
// }

module.exports = PhoneNumber;
