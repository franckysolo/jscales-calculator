/**
 * Test with node js
 */
var sc = require('../jscales-calculator')();

// Major scale
console.log("Major scale:\r\n");
for (var i = 0; i < sc.max(); i++) {
  console.log(sc.transpose(i, sc.params.MAJOR) + "\r\n");
}
console.log("Minor harmo:\r\n");
//Minor harmo
for (var i = 0; i < sc.max(); i++) {
  console.log(sc.transpose(i, sc.params.MINOR.HARMONIC, ' | ') + "\r\n");
}

console.log("Others quick tests:\r\n");
console.log(sc.sharps[0]);
console.log(sc.flat(3));
console.log(sc.sharp(3));
console.log(sc.scales[sc.params.PENTA.MAJOR]);