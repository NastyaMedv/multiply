module.exports = function multiply(first, second) {

  var a = first.split('').reverse(), b = second.split('').reverse(), c = [];

  for (let i=0; i<a.length; i++) {
    for (let j=0; j<b.length; j++) {
      c[i+j] = (c[i+j]) ? (c[i+j] + (a[i] * b[j])) : (a[i] * b[j]);   //column multiplication
    }
  }

  for (let i=0; i<c.length; i++) {
    if (c[i]>9) {
      let d = Math.floor(c[i]/10);
      c[i] = c[i] % 10;
      c[i+1] = (c[i+1]) ? (c[i+1] + d) : d;     // dozens transfer
    }
  }

  return c.reverse().join('');

}
