/**
 * test with require js
 */

require.config({
  paths: {
    scale:'../../jscales-calculator'
  }
});


define(['scale'], function (ScaleCalculator) {
  
  var div = document.getElementById('scales'); 
  var sc = new ScaleCalculator();
  div.innerHTML = "Minor harmonic scale\r\n";
  for (var i = 0; i < sc.max(); i++) {
    div.innerHTML += "\r\n" + sc.flat(i) + " minor harmonic scale\r\n";
    div.innerHTML += sc.transpose(i, sc.params.MINOR.HARMONIC) + "\r\n";
  }
  
});