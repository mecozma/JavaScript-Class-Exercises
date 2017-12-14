function rot13(str) { // LBH QVQ VG!
  var shiftValue = 13;
  var newString = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - shiftValue));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + shiftValue));
    }
  }
  
  return newString.join("");
}


// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
